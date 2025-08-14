"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { AppLink } from "@/apps.config"

export function AppCard({ app }: { app: AppLink }) {
  const accent = app.accent || "#7c0e0e"

  // tags únicas (máx 4) y sin duplicar owner
  const uniqTags = Array.from(new Set(app.tags ?? [])).slice(0, 4)
  const showOwner = app.owner && !uniqTags.includes(app.owner)

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all
                 hover:-translate-y-0.5 hover:shadow-lg focus-within:-translate-y-0.5 focus-within:shadow-lg
                 dark:border-gray-800 dark:bg-black/40"
      role="region"
      aria-labelledby={`${app.id}-title`}
    >
      {/* Header de imagen: altura fija compacta */}
      <div className="relative w-full overflow-hidden rounded-t-2xl h-20 sm:h-24 md:h-28">
        {app.image ? (
          <>
            <Image
              src={app.image}
              alt={app.name}
              fill
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority={false}
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(0deg, rgba(0,0,0,0.12), rgba(0,0,0,0.04)), ${accent}10` }}
              aria-hidden="true"
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
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
          {uniqTags.map((t) => (
            <Badge key={t} className="transition-colors group-hover:border-gray-400">
              {t}
            </Badge>
          ))}
          {showOwner && <Badge className="transition-colors group-hover:border-gray-400">{app.owner}</Badge>}
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
