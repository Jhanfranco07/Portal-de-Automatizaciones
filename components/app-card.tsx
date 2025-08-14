"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { AppLink } from "@/apps.config"

export function AppCard({ app }: { app: AppLink }) {
  const accent = app.accent || "#7c0e0e"

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all
                 hover:-translate-y-0.5 hover:shadow-lg focus-within:-translate-y-0.5 focus-within:shadow-lg
                 dark:border-gray-800 dark:bg-black/40"
      role="region"
      aria-labelledby={`${app.id}-title`}
    >
      {/* Media header con imagen distintiva */}
      <div className="relative h-28 w-full overflow-hidden">
        {app.image ? (
          <>
            <Image
              src={app.image}
              alt={app.name}
              width={400}
              height={200}
              className="h-32 w-full object-cover rounded-t-lg"
            />

            {/* Overlay sutil con color institucional */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(0deg, rgba(0,0,0,0.25), rgba(0,0,0,0.05)), ${accent}10` }}
              aria-hidden="true"
            />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
            <span className="text-3xl" aria-hidden="true">{app.icon || "🧰"}</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-5">
        <div className="mb-2">
          <h3 id={`${app.id}-title`} className="text-lg font-semibold leading-snug">
            {app.name}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{app.description}</p>
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
      </div>

      {/* Borde fantasma al hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-gray-300 dark:group-hover:ring-gray-700" />
    </article>
  )
}
