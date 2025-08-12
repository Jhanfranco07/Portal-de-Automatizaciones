"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react" // Asegúrate de tener lucide-react instalado

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-brand text-white">
      {/* Franja roja sólida */}
      <div className="h-2 w-full bg-brand-dark"></div>

      <div className="container flex flex-wrap items-center justify-between gap-4 py-2">
        {/* Logo y título */}
        <Link
          href="/"
          className="group flex flex-col sm:flex-row sm:items-center gap-2"
          aria-label="Ir al inicio"
        >
          <Image
            src="/pacha2.png"
            alt="Municipalidad de Pachacámac"
            width={48}
            height={48}
            priority
            className="object-contain sm:w-16 sm:h-16"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xs sm:text-sm text-gray-200 group-hover:text-white">
              Municipalidad de Pachacámac
            </span>
            <span className="font-bold text-base sm:text-lg text-white">
              Portal de Automatizaciones
            </span>
          </div>
        </Link>

        {/* Botón hamburguesa en mobile */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-brand-dark transition"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú normal en desktop */}
        <nav
          className={`${
            open ? "flex" : "hidden"
          } flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto mt-2 sm:mt-0 bg-brand sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none transition-all duration-300`}
          aria-label="Principal"
        >
          <Link className="text-sm hover:underline" href="/#apps" onClick={() => setOpen(false)}>Aplicaciones</Link>
          <Link className="text-sm hover:underline" href="/#faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link className="text-sm hover:underline" href="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
        </nav>

      </div>
    </header>
  )
}

