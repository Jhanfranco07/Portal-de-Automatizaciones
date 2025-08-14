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
  image?: string;  
  accent?: string;  
};

export const APPS: AppLink[] = [
  {
    id: "conformidad",
    name: "Generador de Informes",
    slug: "informe-conformidad",
    category: "Conformidad",
    description: "Generación de informes conformidad y requerimiento.",
    url: "https://informe-conformidad.streamlit.app/",
    tags: ["documentos", "automatización", "GLDE"],
    owner: "GLDE",
    image: "/apps/informes.png",    
    accent: "#7c0e0e"
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
    image: "/apps/ferias.png,
    accent: "#7c0e0e"
  },
  {
    id: "ambulantes",
    name: "Registro de Ambulantes",
    slug: "registro-ambulantes",
    category: "Ambulantes",
    description: "Registro y control de comerciantes ambulantes.",
    url: "https://registro-ambulantes-app.streamlit.app/",
    tags: ["registro", "control", "Desarrollo Económico"],
    owner: "Desarrollo Económico",
    image: "/apps/ambulantes.jpg",
    accent: "#7c0e0e"
  },
  {
    id: "reportes",
    name: "Reportes GDE",
    slug: "reportes-gde",
    category: "Reportes",
    description: "Visualización de reportes y métricas de gestión.",
    url: "https://reportesgde.streamlit.app/",
    tags: ["dashboards", "indicadores", "GLDE"],
    owner: "GLDE",
    image: "/apps/reportes.png",
    accent: "#7c0e0e"
  },
  // (opcional) si usas tu app de QRS:
  {
    id: "qrs",
    name: "Generador de QRS - Pachacard",
    slug: "generador-qrs",
    category: "Otros",
    description: "Script para la generación de QRS.",
    url: "https://TU-URL.streamlit.app/",
    tags: ["codigo", "qrs", "Pachacard"],
    owner: "TD",
    image: "/apps/qrs.png",
    accent: "#7c0e0e"
  }
];

