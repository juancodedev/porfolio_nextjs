"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/navigation";

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8" aria-label="Main navigation">
            {navLinks.map((link, index) => {
                return (
                    <Link href={link.path} key={index}
                        aria-current={link.path === pathname ? "page" : undefined}
                        className={
                            `${link.path === pathname
                                ? "text-accent border-b-2 border-accent"
                                : "text-foreground"}
                            capitalize font-medium hover:text-accent transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}>
                        {link.name}
                    </Link>

                );
            })}
        </nav>
    );
};
export default Nav
