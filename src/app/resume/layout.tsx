import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume - Experience & Skills",
  description: "Professional resume of Juan Muñoz - Full Stack Developer with 4 years building production systems. Skills in Python, Django, React, Redux, PostgreSQL, AWS Serverless, and agile methodologies.",
  alternates: {
    canonical: "/resume",
  },
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
