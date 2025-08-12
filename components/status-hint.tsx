"use client"
import * as React from "react"
import { Badge } from "@/components/ui/badge"

async function ping(url: string, signal: AbortSignal): Promise<boolean> {
  try {
    await fetch(url, { mode: "no-cors", method: "GET", signal })
    return true
  } catch {
    return false
  }
}

export function StatusHint({ url }: { url: string }) {
  const [isLikelyUp, setLikelyUp] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 1200)
    ping(url, controller.signal).then((ok) => setLikelyUp(ok)).catch(() => setLikelyUp(false)).finally(() => clearTimeout(timer))
    return () => {
      controller.abort()
      clearTimeout(timer)
    }
  }, [url])

  if (isLikelyUp === null) {
    return <Badge className="bg-gray-100 dark:bg-gray-800">comprobando…</Badge>
  }
  if (isLikelyUp) {
    return <Badge className="bg-green-100 border-green-300 text-green-900 dark:bg-green-900/30 dark:border-green-800 dark:text-green-200">operativa</Badge>
  }
  return (
  <Badge
    className="bg-yellow-100 border-yellow-300 text-yellow-900 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-200"
    title="Si ves un botón azul “Run”/“Rerun” o “Yes, get this app back up!”, haz clic para encender la app (Streamlit gratis)."
  >
    posible reposo
  </Badge>
)

}
