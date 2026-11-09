import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import ProjectVisual from "@/components/ProjectVisual";
import { allProjects, getNextProject, getProject } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () =>
  allProjects.map((project) => ({ slug: project.slug }));

export const generateMetadata = async ({ params }: ProjectPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: `${project.title} - ${project.tagline}`,
    description: `${project.problem} ${project.solution}`,
    alternates: { canonical: `/work/${project.slug}` },
  };
};

const externalLinkStyles =
  "inline-flex min-h-11 items-center gap-2 font-medium text-primary transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded";

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = getNextProject(project.slug);

  return (
    <article className="py-12">
      <div className="container mx-auto">
        <Link
          href="/work"
          className="inline-flex min-h-11 items-center text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
        >
          All projects
        </Link>

        <header className="mt-4 mb-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground">{project.tagline}</p>
        </header>

        <ProjectVisual project={project} sizes="(max-width: 1400px) 100vw, 1300px" priority variant="hero" />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-10 lg:col-span-8">
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">The problem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">{project.problem}</p>
            </section>
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">The solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">{project.solution}</p>
            </section>
            <section>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Highlights</h2>
              <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground leading-relaxed max-w-prose">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="flex flex-col gap-8 lg:col-span-4">
            <section>
              <h2 className="text-lg font-serif font-semibold text-foreground mb-3">Stack</h2>
              <ul className="space-y-1 text-muted-foreground">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </section>

            {(project.live || project.github) && (
              <section className="flex flex-col items-start gap-1">
                <h2 className="text-lg font-serif font-semibold text-foreground mb-2">Links</h2>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={externalLinkStyles}>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    Open live site
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={externalLinkStyles}>
                    <BsGithub className="w-4 h-4" aria-hidden="true" />
                    View source on GitHub
                  </a>
                )}
              </section>
            )}
          </aside>
        </div>

        <nav aria-label="Next project" className="mt-16 border-t border-border pt-8">
          <p className="text-muted-foreground">Next project</p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="font-serif text-3xl font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            {nextProject.title}
          </Link>
        </nav>
      </div>
    </article>
  );
};

export default ProjectPage;
