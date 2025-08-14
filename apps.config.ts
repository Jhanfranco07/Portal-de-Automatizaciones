// apps.config.ts (extracto correcto)
export type AppLink = {
  id: string
  name: string
  slug: string
  category: "Conformidad" | "Ferias" | "Reportes" | "Otros"
  description: string
  url: string
  icon?: string
  tags?: string[]
  owner?: string
  image?: string    // nuevo
  accent?: string   // nuevo
}

export const APPS: AppLink[] = [
  {
    id: "conformidad",
    name: "Generador de Informes",
    slug: "informe-conformidad",
    category: "Conformidad",
    description: "Generación de informes conformidad y requerimiento.",
    url: "https://informe-conformidad.streamlit.app/",
    tags: ["documentos", "automatización"],
    owner: "GLDE",
    image: "/informes.png",
    accent: "#7c0e0e",
  },
  {
    id: "ferias",
    name: "Ferias — Verificación de Puestos",
    slug: "app-feria",
    category: "Ferias",
    description: "Verifica puestos, pagos y ubicación correcta de comerciantes.",
    url: "https://appferia.streamlit.app/",
    tags: ["verificación", "pagos", "puestos", "Desarrollo Económico"],
    owner: "Desarrollo Económico",
    image: "/ferias.png", 
    accent: "#7c0e0e",
  },
  {
    id: "ambulantes",
    name: "Registro de Ambulantes",
    slug: "registro-ambulantes",
    category: "Ferias",
    description: "Registro y control de comerciantes ambulantes.",
    url: "https://registro-ambulantes-app.streamlit.app/",
    tags: ["registro", "control"],
    owner: "Desarrollo Económico",
    image: "/ambulantes.jpg",
    accent: "#7c0e0e",
  },
  {
    id: "reportes",
    name: "Reportes GDE",
    slug: "reportes-gde",
    category: "Reportes",
    description: "Visualización de reportes y métricas de gestión.",
    url: "https://reportesgde.streamlit.app/",
    tags: ["dashboards", "indicadores"],
    owner: "GLDE",
    image: "/reportes.jpg",
    accent: "#7c0e0e",
  },
  {
  id: "qrs",
  name: "Generador de QRS - Pachacard",
  slug: "generador-qrs",
  category: "Otros",
  description: "Script para la generación de QRS.",
  url: "https://github.com/Jhanfranco07/Script-QRS",
  tags: ["codigo", "qrs", "Pachacard"],
  owner: "script",
  image: "/qrs.png",
  accent: "#7c0e0e",
},

]
