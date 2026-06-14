"use client"

import { motion } from "framer-motion"

interface TimelineItem {
  period: string
  title: string
  organization: string
  description?: string
}

interface TimelineProps {
  items: TimelineItem[]
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-[11px] top-2 bottom-2 w-px bg-border"
        aria-hidden="true"
      />

      <ul className="flex flex-col gap-8">
        {items.map((item, index) => (
          <motion.li
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            {/* Dot */}
            <div
              className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 border-primary bg-background flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-primary uppercase tracking-wider">
                {item.period}
              </span>
              <h4 className="text-lg font-serif font-semibold text-foreground leading-snug">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {item.organization}
              </p>
              {item.description && (
                <p className="text-sm text-muted-foreground/80 mt-1 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Timeline
