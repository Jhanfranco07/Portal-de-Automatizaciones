export type AppLink = {
  id: string;
  name: string;
  slug: string;
  category: "Informes" | "Ferias" | "Ambulantes" | "Reportes" | "Otros";
  description: string;
  url: string;
  icon?: string;
  tags?: string[];
  owner?: string;
};

export const APPS: AppLink[] = [
  {
    id: "conformidad",
    name: "Generador de Informes",
    slug: "informe-conformidad",
    category: "Informes",
    description: "Generación de informes conformidad y requerimiento.",
    url: "https://informe-conformidad.streamlit.app/",
    icon: "🧾",
    tags: ["documentos", "automatización"],
    owner: "GLDE",
  },
  {
    id: "ferias",
    name: "Ferias — Verificación de Puestos",
    slug: "app-feria",
    category: "Ferias",
    description: "Verifica puestos, pagos y ubicación correcta de comerciantes.",
    url: "https://appferia.streamlit.app/",
    icon: "🧑‍🌾",
    tags: ["verificación", "pagos", "puestos"],
    owner: "Desarrollo Económico",
  },
  {
    id: "ambulantes",
    name: "Registro de Ambulantes",
    slug: "registro-ambulantes",
    category: "Ambulantes",
    description: "Registro y control de comerciantes ambulantes.",
    url: "https://registro-ambulantes-app.streamlit.app/",
    icon: "🧍‍♂️",
    tags: ["registro", "control"],
    owner: "Desarrollo Económico",
  },
  {
    id: "reportes",
    name: "Reportes GDE",
    slug: "reportes-gde",
    category: "Reportes",
    description: "Visualización de reportes y métricas de gestión.",
    url: "https://reportesgde.streamlit.app/",
    icon: "📊",
    tags: ["dashboards", "indicadores"],
    owner: "GLDE",
  },
    {
    id: "otros",
    name: "Generador de QRS - Pachacard",
    slug: "QRS",
    category: "Otros",
    description: "Script para la generación de QRS",
    url: "https://registro-ambulantes-app.streamlit.app/",
    icon: "🧍‍♂️",
    tags: ["codigo", "qrs"],
    owner: "Pachacard",
  },
];
