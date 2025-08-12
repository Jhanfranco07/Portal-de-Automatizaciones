"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { StatusHint } from "@/components/status-hint"
import type { AppLink } from "@/apps.config"

export function AppCard({ app }: { app: AppLink }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border p-5 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-brand" role="region" aria-labelledby={`${app.id}-title`}>
      <div className="flex items-start gap-3">
        <div className="text-3xl" aria-hidden="true">{app.icon || "🧰"}</div>
        <div className="flex-1">
          <h3 id={`${app.id}-title`} className="text-lg font-semibold">{app.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{app.description}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        {app.tags?.slice(0,3).map(t => <Badge key={t}>{t}</Badge>)}
        {app.owner && <Badge>{app.owner}</Badge>}
        <StatusHint url={app.url} />
      </div>
      <div className="mt-4 flex gap-2">
        <a href={app.url} target="_blank" rel="noopener noreferrer">
          <Button aria-label={`Abrir ${app.name} en nueva pestaña`}>Abrir</Button>
        </a>
        <Link href={`/apps/${app.slug}`}>
          <Button variant="outline" aria-label={`Ver detalles de ${app.name}`}>Detalles</Button>
        </Link>
      </div>
    </article>
  )
}
