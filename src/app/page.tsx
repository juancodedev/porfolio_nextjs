import Photo from "@/components/Photo"
import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "Juan Muñoz — 19 years in technology. Building software that solves real problems with Python, React, Next.js, and AWS.",
}

const Home = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-16 py-12 xl:py-24">
          {/* Text content */}
          <div className="text-center xl:text-left order-2 xl:order-none max-w-[600px]">
            <p className="text-lg font-medium text-muted-foreground mb-3">
              Full-Stack Developer
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold text-foreground leading-[1.1] mb-6">
              Juan{" "}
              <span className="text-primary">Muñoz</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-[520px]">
              19 years in technology. The last 3+ building software that solves real problems.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <Link href="/contact">
                <Button size="lg">
                  Get in touch
                </Button>
              </Link>
              <Link href="/work">
                <Button variant="outline" size="lg">
                  View my work
                </Button>
              </Link>
            </div>

            {/* Social links */}
            <div className="flex justify-center xl:justify-start">
              <Social containerStyles="flex gap-4" />
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
