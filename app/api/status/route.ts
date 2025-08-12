import { NextResponse } from "next/server"

const SLEEP_MARKERS = [
  "Yes, get this app back up!",
  "Zzz",
  ">Run<",
  ">Rerun<",
]

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const url = typeof body?.url === "string" ? body.url : undefined
  if (!url) {
    return NextResponse.json({ ok: false, state: "down", reason: "missing-url" }, { status: 400 })
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 4000)

  const headers = {
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118 Safari/537.36",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "accept-language": "es-PE,es;q=0.9,en;q=0.8",
  }

  try {
    // HEAD rápido
    let res = await fetch(url, { method: "HEAD", headers, redirect: "follow", signal: controller.signal })

    // Si HEAD es aceptado y ok → activo
    if (res.ok) {
      clearTimeout(timeout)
      return NextResponse.json({ ok: true, state: "active", status: res.status }, { status: 200 })
    }

    // Muchos bloquean HEAD → vamos a GET
    const getRes = await fetch(url, { method: "GET", headers, redirect: "follow", signal: controller.signal })
    res = getRes
    let text = ""
    try { text = await res.text() } catch { /* puede fallar por streaming o guardas */ }

    const looksSleeping = text && SLEEP_MARKERS.some((m) => text.includes(m))

    // Heurística:
    // - Si vemos marcadores de "sleep" → sleep
    if (looksSleeping) {
      clearTimeout(timeout)
      return NextResponse.json({ ok: true, state: "sleep", status: res.status }, { status: 200 })
    }

    // - 2xx/3xx → activo
    if (res.status >= 200 && res.status < 400) {
      clearTimeout(timeout)
      return NextResponse.json({ ok: true, state: "active", status: res.status }, { status: 200 })
    }

    // - 401/403/405 suelen ser guardas anti-bot, pero el navegador carga → considerar activo
    if ([401, 403, 405].includes(res.status)) {
      clearTimeout(timeout)
      return NextResponse.json({ ok: true, state: "active", status: res.status, hinted: "bot-guard" }, { status: 200 })
    }

    clearTimeout(timeout)
    return NextResponse.json({ ok: false, state: "down", status: res.status }, { status: 200 })
  } catch (e: any) {
    clearTimeout(timeout)
    const reason = e?.name || "fetch-error"
    const state = reason === "AbortError" ? "sleep" : "down"
    return NextResponse.json({ ok: false, state, reason }, { status: 200 })
  }
}


