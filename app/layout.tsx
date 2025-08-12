import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "./theme-provider"

const siteName = "Portal de Automatizaciones — Municipalidad de Pachacámac"
const description = "Landing + catálogo que centraliza y enlaza las aplicaciones Streamlit institucionales."

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: siteName,
  description,
  applicationName: siteName,
  openGraph: {
    title: siteName,
    description,
    images: ["/og.png"],
    type: "website",
    locale: "es_PE"
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-900 antialiased dark:bg-black dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main id="contenido" className="container">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
