import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Let's Build Your Project",
  description: "Get in touch with Juan Muñoz for web development projects, consulting, or collaboration opportunities. Let's build something great together.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
