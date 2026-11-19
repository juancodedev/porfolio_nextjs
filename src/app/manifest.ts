import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Juan Muñoz | Full Stack Developer",
    short_name: "juancode",
    description:
      "Full Stack Developer with 4 years building production systems in Python, Django, React, PostgreSQL and AWS.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF8",
    theme_color: "#1A1A1A",
    icons: [
      { src: "/icon1.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/icon2.png", type: "image/png", sizes: "32x32" },
      { src: "/icon3.png", type: "image/png", sizes: "512x512", purpose: "any" },
      { src: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
  }
}
