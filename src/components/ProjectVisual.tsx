import Image from "next/image"
import type { Project } from "@/data/projects"

interface ProjectVisualProps {
  project: Project
  sizes: string
  priority?: boolean
  /** Hero renders a shorter panel with larger type, for the top of a case page. */
  variant?: "card" | "hero"
}

const ProjectVisual = ({ project, sizes, priority = false, variant = "card" }: ProjectVisualProps) => {
  const isHeroPanel = variant === "hero" && !project.image

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-border bg-muted ${
        isHeroPanel ? "aspect-[4/3] sm:aspect-[3/1]" : "aspect-video"
      }`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-left-top"
        />
      ) : (
        <div className="flex h-full items-end bg-[hsl(var(--panel))] p-6 sm:p-10">
          <p
            className={`font-serif font-bold leading-[1.1] text-[hsl(var(--panel-foreground))] [text-wrap:balance] ${
              isHeroPanel ? "text-4xl md:text-6xl" : "text-3xl lg:text-[2.75rem]"
            }`}
          >
            {project.outcome ?? project.tagline}
          </p>
        </div>
      )}
    </div>
  )
}

export default ProjectVisual
