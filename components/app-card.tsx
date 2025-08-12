"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { AppLink } from "@/apps.config"

export function AppCard({ app }: { app: AppLink }) {
  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm transition-all
                 hover:-translate-y-0.5 hover:shadow-lg focus-within:-translate-y-0.5 focus-within:shadow-lg
                 dark:border-gray-800 dark:bg-black/40"
      role="region"
      aria-labelledby={`${app.id}-title`}
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl transition-transform group-hover:scale-110" aria-hidden="true">
          {app.icon || "🧰"}
        </div>
        <div className="flex-1">
          <h3 id={`${app.id}-title`} className="text-lg font-semibold">
            {app.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{app.description}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {app.tags?.slice(0, 3).map((t) => (
          <Badge key={t} className="transition-colors group-hover:border-gray-400">
            {t}
          </Badge>
        ))}
        {app.owner && <Badge className="transition-colors group-hover:border-gray-400">{app.owner}</Badge>}
      </div>

      <div className="mt-4 flex gap-2">
        <a href={app.url} target="_blank" rel="noopener noreferrer">
          <Button
            aria-label={`Abrir ${app.name} en nueva pestaña`}
            className="transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Abrir
          </Button>
        </a>
        <Link href={`/apps/${app.slug}`}>
          <Button
            variant="outline"
            aria-label={`Ver detalles de ${app.name}`}
            className="transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Detalles
          </Button>
        </Link>
      </div>

      {/* “doble borde” sutil */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-gray-300 dark:group-hover:ring-gray-700" />
    </article>
  )
}
