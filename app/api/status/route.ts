import { NextResponse } from "next/server"

const SLEEP_MARKERS = [
  "Yes, get this app back up!",
  "Zzz",
  ">Run<",
  ">Rerun<",
]

async function tryFetch(url: string, init: RequestInit, asText: boolean) {
  const res = await fetch(url, init)
  let text = ""
  if (asText) {
    try { text = await res.text() } catch { /* ignorar */ }
  }
  return { res, text }
}

export async function POST(req: Request) {
  const { url } = (await req.json().catch(() => ({}))) as { url?: string }
  if (!url) return NextResponse.json({ ok: false, state: "down", reason: "missing-url" }, { status: 400 })

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 4000)

  const commonHeaders = {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118 Safari/537.36",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "accept-language": "es-PE,es;q=0.9,en;q=0.8",
  }

  try {
    // 1) HEAD rápido
    let { res } = await tryFetch(url, { method: "HEAD", headers: commonHeaders, redirect: "follow", signal: controller.signal }, false)

    // Algunos hosts bloquean HEAD → caemos a GET
    if (res.status === 405 || res.status === 403 || res.status === 401) {
      // tratar como potencialmente accesible, pasamos a GET para inspeccionar
      // no devolvemos todavía
    } else if (res.ok) {
      clearTimeout(timeout)
      return NextResponse.json({ ok: true, state: "active", status: res.status }, { status: 200 })
    }

    // 2) GET con lectura de HTML
    const getTry = await tryFetch(url, { method: "GET", headers: commonHeaders, redirect: "follow", signal: controller.signal }, true)
    res = getTry.res
    const text = getTry.text

    const looksSleeping = SLEEP_MARKERS.some((m) => text.includes(m))

    // Mapeo de estados
    if (looksSleeping) {
      clearTimeout(timeout)
      return NextResponse.json({ ok: true, state: "sleep", status: res.status }, { status: 200 })
    }

    if (res.status >= 200 && res.status < 400) {
      clearTimeout(timeout)
      return NextResponse.json({ ok: true, state: "active", status: res.status }, { status: 200 })
    }

    // Muchos 401/403/405 vienen de protecciones anti-bot, pero el navegador sí carga
    if (res.status === 401 || res.status === 403 || res.status === 405) {
      clearTimeout(timeout)
      return NextResponse.json({ ok: true, state: "active", status: res.status, hinted: "bot-guard" }, { status: 200 })
    }

    clearTimeout(timeout)
    return NextResponse.json({ ok: false, state: "down", status: res.status }, { status: 200 })
  } catch (e: any) {
    clearTimeout(timeout)
    // Los timeouts/aborts suelen ser “app dormida”
    const reason = e?.name || "fetch-error"
    const state = reason === "AbortError" ? "sleep" : "down"
    return NextResponse.json({ ok: false, state, reason }, { status: 200 })
  }
}
