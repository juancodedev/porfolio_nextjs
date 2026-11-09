import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Software Work by Juan Muñoz",
  description: "Software projects by Juan Muñoz, from multi-tenant SaaS platforms to CRMs, monitoring dashboards, and real-time maps.",
  alternates: {
    canonical: "/work",
  },
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
