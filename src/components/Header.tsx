import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header className="py-6 xl:py-8 text-foreground">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" aria-label="Go to homepage">
                    <span className="text-4xl font-semibold">
                        Juan<span className="text-accent">.</span>
                    </span>
                </Link>
                {/* Desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>
                {/* Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}
export default Header 