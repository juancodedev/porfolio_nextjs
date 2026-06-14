"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { BsGithub } from "react-icons/bs"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  stack: { name: string }[]
  image: string
  liveUrl: string
  githubUrl: string
}

const ProjectCard = ({
  title,
  description,
  category,
  stack,
  image,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:scale-[1.02] hover:shadow-md transition-all duration-200"
    >
      {/* Image — full width on top, landscape screenshots */}
      <div className="relative w-full aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-left-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6 sm:p-8 flex-1 gap-4">
        <div className="flex flex-col gap-3">
          {/* Category badge */}
          <span className="self-start px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            {category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2">
          {stack.slice(0, 6).map((tech) => (
            <span
              key={tech.name}
              className="px-2 py-0.5 text-xs font-mono text-muted-foreground bg-muted rounded"
            >
              {tech.name}
            </span>
          ))}
          {stack.length > 6 && (
            <span className="px-2 py-0.5 text-xs font-mono text-muted-foreground bg-muted rounded">
              +{stack.length - 6}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2 border-t border-border">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
              aria-label={`View ${title} live`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live</span>
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
              aria-label={`View ${title} source on GitHub`}
            >
              <BsGithub className="w-4 h-4" />
              <span>GitHub</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
