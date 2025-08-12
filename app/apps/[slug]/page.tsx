import { notFound } from "next/navigation"
import { APPS } from "@/apps.config"
import Link from "next/link"

export default function AppDetail({ params }: { params: { slug: string } }) {
  const app = APPS.find(a => a.slug === params.slug)
  if (!app) return notFound()

  return (
    <div className="py-10">
      <nav className="mb-6 text-sm text-gray-500 dark:text-gray-400"><Link href="/">Inicio</Link> / <span>{app.name}</span></nav>
      <h1 className="text-3xl font-bold">{app.icon} {app.name}</h1>
      <p className="mt-2 text-gray-700 dark:text-gray-300">{app.description}</p>

      <div className="mt-6 rounded-2xl border bg-yellow-50 p-4 text-sm text-yellow-900 dark:bg-yellow-900/30 dark:text-yellow-100 dark:border-yellow-800">
        <strong>Importante:</strong> Estas aplicaciones están alojadas en <em>Streamlit Community</em> (plan gratuito). Cuando no hay actividad, entran en reposo. Si al ingresar ves un botón azul de <strong>“Run”</strong> o <strong>“Rerun”</strong>, haz clic para encenderla y espera unos segundos.
      </div>

      {app.slug === "app-feria" && (
        <div className="mt-6 rounded-2xl border p-4 bg-gray-50 dark:bg-gray-900/40">
          <h2 className="text-xl font-semibold">Sobre la app Feria</h2>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            La app Feria permite verificar puestos, comprobar que todos han pagado y confirmar que están en sus puestos correspondientes.
          </p>
        </div>
      )}

      <div className="mt-6 flex gap-3">
        <a href={app.url} target="_blank" rel="noopener" className="rounded-2xl bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark">Abrir aplicación</a>
        <a href="/" className="rounded-2xl border px-5 py-3">Volver al catálogo</a>
      </div>

      <dl className="mt-8 grid gap-4 md:grid-cols-2">
        <div><dt className="font-medium">Categoría</dt><dd>{app.category}</dd></div>
        <div><dt className="font-medium">Área responsable</dt><dd>{app.owner ?? "—"}</dd></div>
        <div className="md:col-span-2"><dt className="font-medium">Etiquetas</dt><dd className="text-sm text-gray-600 dark:text-gray-300">{app.tags?.join(", ") || "—"}</dd></div>
      </dl>
    </div>
  )
}
