import Link from "next/link"
import ProjectVisual from "@/components/ProjectVisual"
import type { Project } from "@/data/projects"

interface FeaturedProjectProps {
  project: Project
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <article className="group relative grid items-center gap-6 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-7">
        <ProjectVisual project={project} sizes="(max-width: 768px) 100vw, 60vw" />
      </div>

      <div className="flex flex-col gap-3 md:col-span-5">
        <h3 className="text-3xl font-serif font-semibold leading-tight text-foreground">
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors after:absolute after:inset-0 after:rounded-lg group-hover:text-primary focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring focus-visible:after:ring-offset-4 focus-visible:after:ring-offset-background"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed">{project.summary}</p>
      </div>
    </article>
  )
}

export default FeaturedProject
