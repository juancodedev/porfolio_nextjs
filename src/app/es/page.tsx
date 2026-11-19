import type { Metadata } from "next"
import Home from "../page"

// Spanish share link for WhatsApp and other link previews.
// The page content is the same English home; only the preview metadata changes.
const title = "Juan Muñoz | Desarrollador Full Stack en Chile"
const description =
  "Desarrollador Full Stack con 4 años construyendo sistemas en producción con Python, Django, React, PostgreSQL y AWS. Experiencia en SaaS de RRHH y remuneraciones en Chile y Ecuador."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    // Same content as the home page, so search engines keep "/" as the main URL.
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    alternateLocale: ["en_US"],
    url: "https://www.juancode.dev/es",
    siteName: "Juan Muñoz Portfolio",
    title,
    description,
    images: [
      {
        url: "/og-image-es.jpg",
        width: 1200,
        height: 1200,
        type: "image/jpeg",
        alt: "Juan Muñoz - Desarrollador Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [{ url: "/og-image-es.jpg", alt: "Juan Muñoz - Desarrollador Full Stack" }],
  },
}

export default Home
