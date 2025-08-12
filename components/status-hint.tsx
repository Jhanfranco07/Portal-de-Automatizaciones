"use client"
import * as React from "react"
import { Badge } from "@/components/ui/badge"

type State = "active" | "sleep" | "down" | null

export function StatusHint({ url }: { url: string }) {
  const [state, setState] = React.useState<State>(null)

  async function check() {
    try {
      const res = await fetch("/api/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })
      const data = await res.json()
      setState((data?.state ?? "down") as State)
    } catch {
      setState("down")
    }
  }

  React.useEffect(() => {
    check()
    // opcional: re-chequeo cuando el usuario vuelve a la pestaña
    const onFocus = () => check()
    window.addEventListener("focus", onFocus)
    return () => window.removeEventListener("focus", onFocus)
  }, [url])

  if (state === null) {
    return <Badge className="bg-gray-100 dark:bg-gray-800">comprobando…</Badge>
  }
  if (state === "active") {
    return (
      <Badge className="bg-green-100 border-green-300 text-green-900 dark:bg-green-900/30 dark:border-green-800 dark:text-green-200">
        activo
      </Badge>
    )
  }
  if (state === "sleep") {
    return (
      <Badge
        className="bg-yellow-100 border-yellow-300 text-yellow-900 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-200"
        title='La app puede estar dormida. Al entrar, haz clic en “Run/Rerun” o “Yes, get this app back up!”.'
      >
        posible reposo
      </Badge>
    )
  }
  return (
    <Badge className="bg-red-100 border-red-300 text-red-900 dark:bg-red-900/30 dark:border-red-800 dark:text-red-200">
      inactivo
    </Badge>
  )
}
