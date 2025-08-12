"use client"
import * as React from "react"
import { Badge } from "@/components/ui/badge"

type State = "active" | "sleep" | "down" | null

async function clientPing(url: string): Promise<boolean> {
  try {
    // Ping básico desde el navegador (respuesta opaca cuenta como "llegó")
    await fetch(url, { mode: "no-cors", method: "GET" })
    return true
  } catch {
    return false
  }
}

export function StatusHint({ url }: { url: string }) {
  const [state, setState] = React.useState<State>(null)
  const [checking, setChecking] = React.useState(false)

  const check = React.useCallback(async () => {
    setChecking(true)
    try {
      const res = await fetch("/api/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // cache-buster para evitar respuestas cacheadas
        body: JSON.stringify({ url: url + (url.includes("?") ? "&" : "?") + "_ts=" + Date.now() }),
      })
      const data = await res.json()
      let s = (data?.state ?? "down") as State

      // Fallback: si API dice "sleep" o "down" pero el cliente alcanza la URL, lo marcamos como ACTIVO.
      if (s !== "active") {
        const reachable = await clientPing(url)
        if (reachable) s = "active"
      }

      setState(s)
    } catch {
      const reachable = await clientPing(url)
      setState(reachable ? "active" : "down")
    } finally {
      setChecking(false)
    }
  }, [url])

  React.useEffect(() => {
    check()
    const onFocus = () => check()
    window.addEventListener("focus", onFocus)
    return () => window.removeEventListener("focus", onFocus)
  }, [check])

  // UI
  if (state === null || checking) {
    return <Badge className="bg-gray-100 dark:bg-gray-800">comprobando…</Badge>
  }
  if (state === "active") {
    return (
      <span className="inline-flex items-center gap-2">
        <Badge className="bg-green-100 border-green-300 text-green-900 dark:bg-green-900/30 dark:border-green-800 dark:text-green-200">
          activo
        </Badge>
        <button
          className="text-xs underline decoration-dotted"
          onClick={check}
          aria-label="Revisar estado nuevamente"
        >
          Revisar estado
        </button>
      </span>
    )
  }
  if (state === "sleep") {
    return (
      <span className="inline-flex items-center gap-2">
        <Badge
          className="bg-yellow-100 border-yellow-300 text-yellow-900 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-200"
          title='La app puede estar dormida. Al entrar, haz clic en “Run/Rerun” o “Yes, get this app back up!”.'
        >
          posible reposo
        </Badge>
        <button className="text-xs underline decoration-dotted" onClick={check}>
          Revisar estado
        </button>
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-2">
      <Badge className="bg-red-100 border-red-300 text-red-900 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
        inactivo
      </Badge>
      <button className="text-xs underline decoration-dotted" onClick={check}>
        Reintentar
      </button>
    </span>
  )
}
