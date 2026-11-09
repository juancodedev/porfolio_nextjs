import FeaturedProject from "@/components/FeaturedProject"
import Photo from "@/components/Photo"
import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import { allProjects, featuredProjects } from "@/data/projects"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Full Stack Web Developer",
  description: "Juan Muñoz — Full Stack Developer with 4 years building production systems in Python, Django, React, Redux, PostgreSQL, and AWS Serverless.",
  alternates: {
    canonical: "/",
  },
}

const Home = () => {
  return (
    <>
      <section className="container mx-auto grid items-center gap-10 py-10 lg:grid-cols-12 xl:py-20">
        <div className="lg:col-span-9">
          <p className="text-lg font-medium text-muted-foreground mb-4">
            Juan Muñoz, full-stack developer
          </p>
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-[1.05] mb-6">
            I spent 15 years learning how systems fail. Now I build them to last.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            4 years building production systems with Python, Django, React, PostgreSQL, and AWS.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <Button size="lg" asChild>
              <Link href="/work">View my work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>

          <Social containerStyles="flex gap-3" />
        </div>

        <div className="lg:col-span-3 lg:justify-self-end">
          <Photo />
        </div>
      </section>

      <section aria-labelledby="selected-work" className="container mx-auto py-12 xl:py-20">
        <h2 id="selected-work" className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12">
          Selected work
        </h2>

        <div className="flex flex-col gap-16">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.slug} project={project} />
          ))}
        </div>

        <Button variant="outline" asChild className="mt-16">
          <Link href="/work">See all {allProjects.length} projects</Link>
        </Button>
      </section>
    </>
  )
}

export default Home
