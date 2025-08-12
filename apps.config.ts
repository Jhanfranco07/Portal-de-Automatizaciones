export type AppLink = {
  id: string;
  name: string;
  slug: string;
  category: "Conformidad" | "Ferias" | "Ambulantes" | "Reportes" | "Otros";
  description: string;
  url: string;
  icon?: string;
  tags?: string[];
  owner?: string;
};

export const APPS: AppLink[] = [
  {
    id: "conformidad",
    name: "Informe de Conformidad",
    slug: "informe-conformidad",
    category: "Conformidad",
    description: "Generación de informes y documentos de conformidad.",
    url: "https://informe-conformidad.streamlit.app/",
    icon: "🧾",
    tags: ["documentos", "automatización"],
    owner: "GDE",
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
    owner: "Fiscalización",
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
    owner: "GDE",
  },
];
