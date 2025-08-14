"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="
        sticky top-0 z-40 w-full text-white shadow-lg
        bg-gradient-to-r from-[#7c0e0e] to-[#b51e1e]
      "
      aria-label="Barra superior de navegación"
    >
      {/* Contenido principal del header */}
      <div className="container flex flex-wrap items-center justify-between gap-4 px-4 py-3">
        {/* Logo + textos (link home) */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Ir al inicio"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white p-1.5 shadow-md">
            <Image
              src="/logo.png"
              alt="Municipalidad de Pachacámac"
              width={52}
              height={52}
              priority
              className="object-contain"
            />
          </span>
          <div className="leading-tight">
            <span className="block text-base sm:text-lg font-semibold tracking-wide">
              Municipalidad de Pachacámac
            </span>
            {/* Subtítulo suave para no competir con el H1 de la landing */}
            <span className="block text-xs text-white/80">
              Gerencia de Licencias y Desarrollo Económico
            </span>
          </div>
        </Link>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="sm:hidden inline-flex items-center rounded-md p-2 hover:bg-white/10 transition"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="nav-principal"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Menú */}
        <nav
          id="nav-principal"
          className={`${
            open ? "flex" : "hidden"
          } w-full sm:w-auto flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3
             mt-2 sm:mt-0 rounded-lg sm:rounded-none bg-white/0 sm:bg-transparent
             sm:flex transition-all duration-300`}
          aria-label="Principal"
        >
          <Link
            className="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            href="/#apps"
            onClick={() => setOpen(false)}
          >
            Aplicaciones
          </Link>
          <Link
            className="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            href="/#faq"
            onClick={() => setOpen(false)}
          >
            FAQ
          </Link>
          <Link
            className="rounded-md px-3 py-1.5 text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            href="/contacto"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      </div>

      {/* Línea dorada decorativa inferior */}
      <div className="h-1 w-full bg-[#FFD700]" />
    </header>
  )
}
