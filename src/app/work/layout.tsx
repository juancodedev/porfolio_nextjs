import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio Projects - Web Development Work",
  description: "Explore my portfolio of web development projects. Frontend and full-stack applications built with React, Next.js, Tailwind CSS, and modern technologies.",
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
