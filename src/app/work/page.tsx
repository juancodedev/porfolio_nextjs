import ProjectCard from "@/components/ProjectCard";
import { allProjects } from "@/data/projects";

const Work = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mb-12">
          Software I&apos;ve designed and built on my own time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {allProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
