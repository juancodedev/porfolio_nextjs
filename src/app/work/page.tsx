"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { allProjects, categories, type Category } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const projects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col py-12"
    >
      <div className="container mx-auto max-w-[1200px] px-4 md:px-8">
        {/* Filter chips */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium capitalize transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center">
            <h3 className="text-2xl font-serif font-semibold text-foreground">
              No projects in this category yet
            </h3>
            <p className="text-muted-foreground max-w-xs">
              I haven&apos;t published any{" "}
              <span className="capitalize text-primary">{activeCategory}</span>{" "}
              projects yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.num}
                title={project.title}
                description={project.description}
                category={project.category}
                stack={project.stack}
                image={project.image}
                liveUrl={project.live}
                githubUrl={project.github}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Work;
