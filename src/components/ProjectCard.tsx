import Link from "next/link"
import ProjectVisual from "@/components/ProjectVisual"
import type { Project } from "@/data/projects"

const VISIBLE_STACK_ITEMS = 5

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const visibleStack = project.stack.slice(0, VISIBLE_STACK_ITEMS).join(", ")

  return (
    <article className="group relative flex flex-col gap-5">
      <ProjectVisual project={project} sizes="(max-width: 768px) 100vw, 50vw" />

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-serif font-semibold leading-snug text-foreground">
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors after:absolute after:inset-0 after:rounded-lg group-hover:text-primary focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring focus-visible:after:ring-offset-4 focus-visible:after:ring-offset-background"
          >
            {project.title}
          </Link>
        </h2>
        <p className="text-muted-foreground leading-relaxed">{project.summary}</p>
        <p className="text-sm text-muted-foreground">{visibleStack}</p>
      </div>
    </article>
  )
}

export default ProjectCard
