"use client"
import * as React from "react"
import { APPS, type AppLink } from "@/apps.config"
import { AppCard } from "@/components/app-card"
import { SearchBar } from "@/components/search-bar"
import { FilterChips } from "@/components/filter-chips"
import { searchFilter } from "@/lib/utils"

const BANNER = (
  <div
    role="note"
    aria-label="Aviso importante sobre Streamlit"
    className="rounded-2xl border bg-yellow-50 p-4 text-sm text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-100 dark:border-yellow-800 fade-in"
  >
    <strong>Importante:</strong> Estas aplicaciones están alojadas en <em>Streamlit Community</em> (plan gratuito).
    Cuando no hay actividad, entran en reposo. Si al ingresar ves un botón azul de
    <strong> “Run”/“Rerun”</strong> o <strong>“Yes, get this app back up!”</strong>, haz clic para encenderla y espera unos segundos.
  </div>
)

export default function HomePage() {
  const [query, setQuery] = React.useState("")
  const [cat, setCat] = React.useState<string | undefined>(undefined)

  const filtered = React.useMemo(() => {
    return APPS.filter(app => {
      const matchesCategory = !cat || app.category === cat
      const hay = app.name + " " + app.description
      const matchesQuery = !query || searchFilter(query, hay)
      return matchesCategory && matchesQuery
    })
  }, [query, cat])

  return (
    <div className="py-10">
      {/* Sección de título */}
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="mb-3 text-4xl font-extrabold tracking-tight md:text-5xl fade-up">
          Portal de Automatizaciones
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 fade-up fade-delay">
          Landing institucional para centralizar y acceder a las aplicaciones Streamlit de la Municipalidad de Pachacámac.
        </p>
        <div className="mt-6 flex justify-center fade-up fade-delay" style={{ animationDelay: "0.4s" }}>
          <a href="#apps" className="rounded-2xl bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark transition-all duration-300">
            Ver aplicaciones
          </a>
        </div>
      </section>

      {/* Banner de aviso */}
      <div className="mt-8">{BANNER}</div>

      {/* Listado de apps */}
      <section id="apps" className="mt-8 space-y-4">
        <div className="grid gap-4 md:grid-cols-[2fr,1fr] fade-in">
          <SearchBar onChange={setQuery} />
          <FilterChips value={cat} onChange={setCat} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((app: AppLink, i) => (
            <div
              key={app.id}
              className="fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <AppCard app={app} />
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-sm text-gray-600 dark:text-gray-300 fade-in">
              Sin resultados. Ajusta tu búsqueda o filtros.
            </p>
          )}
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section id="faq" className="mt-16 space-y-4 fade-up">
        <h2 className="text-2xl font-bold">Preguntas Frecuentes</h2>

        <details className="rounded-xl border p-4 fade-in">
          <summary className="cursor-pointer font-medium">¿Por qué veo un botón azul en Streamlit?</summary>
          <p className="mt-2 text-sm">
            Streamlit Community (plan gratuito) pone las apps en reposo. Verás un botón azul
            “<strong>Run</strong>/<strong>Rerun</strong>” o “<strong>Yes, get this app back up!</strong>”.
            Haz clic para encenderla.
          </p>
        </details>

        <details className="rounded-xl border p-4 fade-in">
          <summary className="cursor-pointer font-medium">¿Qué hago si no carga?</summary>
          <p className="mt-2 text-sm">
            Recarga la página, espera <strong>5–15 segundos</strong> y verifica tu conexión.
          </p>
        </details>

        <details className="rounded-xl border p-4 fade-in">
          <summary className="cursor-pointer font-medium">¿A quién contacto?</summary>
          <p className="mt-2 text-sm">
            Escríbenos a <a className="underline" href="mailto:soporte@pachacamac.gob.pe">soporte@pachacamac.gob.pe</a>.
          </p>
        </details>
      </section>
    </div>
  )
}
