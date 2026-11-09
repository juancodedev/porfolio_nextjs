import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

const ServiceCard = ({ title, description, icon: Icon, href }: ServiceCardProps) => {
  return (
    <article className="flex flex-col items-start gap-3 border-t border-border pt-6">
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
        <h2 className="text-2xl font-serif font-semibold text-foreground">{title}</h2>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      <Link
        href={href}
        className="inline-flex min-h-11 items-center font-medium text-primary transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
      >
        Ask about {title.toLowerCase()}
      </Link>
    </article>
  )
}

export default ServiceCard
