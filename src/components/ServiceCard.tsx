"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  num: string
  title: string
  description: string
  icon: LucideIcon
  href: string
}

const ServiceCard = ({
  num,
  title,
  description,
  icon: Icon,
  href,
}: ServiceCardProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col gap-5 p-6 sm:p-8 bg-card border border-border rounded-lg hover:scale-[1.02] hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
    >
      {/* Top row: number + arrow */}
      <div className="flex items-center justify-between">
        <span className="text-5xl font-serif font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
          {num}
        </span>
        <Link
          href={href}
          className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`Learn more about ${title}`}
        >
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
        </Link>
      </div>

      {/* Icon + Title */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export default ServiceCard
