"use client"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-brand text-white backdrop-blur-sm/">
      {/* Franja roja sólida */}
      <div className="h-2 w-full bg-brand-dark"></div>

      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute left-2 top-2 z-50 bg-brand text-white px-3 py-1 rounded"
      >
        Saltar al contenido
      </a>

      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="Ir al inicio">
          <Image
            src="/logo.png"
            alt="Municipalidad de Pachacámac"
            width={64}
            height={64}
            priority
            className="object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-gray-200 group-hover:text-white">
              Municipalidad de Pachacámac
            </span>
            <span className="font-bold text-lg text-white">
              Portal de Automatizaciones
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-4" aria-label="Principal">
          <Link className="text-sm hover:underline" href="/#apps">Aplicaciones</Link>
          <Link className="text-sm hover:underline" href="/#faq">FAQ</Link>
          <Link className="text-sm hover:underline" href="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
