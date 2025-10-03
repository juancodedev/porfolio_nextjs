import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional resume of Juan Muñoz - Full Stack Developer with 2+ years of experience. Skills in Python, JavaScript, AWS, PostgreSQL, and agile methodologies.",
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
