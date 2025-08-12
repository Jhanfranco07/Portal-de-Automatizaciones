import { NextResponse } from "next/server"

const SLEEP_MARKERS = [
  "Yes, get this app back up!",
  "Zzz",                       // encabezado típico
  ">Run<",                     // botón Run
  ">Rerun<",                   // botón Rerun
]

export async function POST(req: Request) {
  try {
    const { url } = await req.json() as { url?: string }
    if (!url) return NextResponse.json({ ok: false, state: "down", reason: "missing-url" }, { status: 400 })

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 3500)

    // Importante: server-side fetch (no CORS). Trae HTML para inspeccionar.
    const res = await fetch(url, { signal: controller.signal })
    clearTimeout(timeout)

    const status = res.status
    let text = ""
    // No siempre podremos leer el cuerpo si hay redirecciones, pero probamos:
    try { text = await res.text() } catch {}

    // Heurística de “dormido”
    const looksSleeping = SLEEP_MARKERS.some(m => text.includes(m))

    if (status >= 500) {
      return NextResponse.json({ ok: false, state: "down", status }, { status: 200 })
    }
    if (looksSleeping) {
      return NextResponse.json({ ok: true, state: "sleep", status }, { status: 200 })
    }
    if (status >= 200 && status < 400) {
      return NextResponse.json({ ok: true, state: "active", status }, { status: 200 })
    }
    // 4xx u otros: lo tratamos como inactivo (puede ser privado o caído)
    return NextResponse.json({ ok: false, state: "down", status }, { status: 200 })
  } catch (e: any) {
    return NextResponse.json({ ok: false, state: "down", reason: e?.name || "fetch-error" }, { status: 200 })
  }
}
