import Social from "@/components/Social"
import { cvPath } from "@/lib/navigation"

const linkStyles =
  "font-medium text-primary transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="container mx-auto flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-xl font-semibold text-foreground">
            Have a project or a role in mind?
          </p>
          <a href="mailto:jmunoz@juancode.dev" className={linkStyles}>
            jmunoz@juancode.dev
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a href={cvPath} download className={linkStyles}>
            Download CV
          </a>
          <Social containerStyles="flex gap-3" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
