import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Professional web development services: Full Stack Development, Backend Solutions, Systems Integration, and Technology Consulting. Modern solutions for your business needs.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
