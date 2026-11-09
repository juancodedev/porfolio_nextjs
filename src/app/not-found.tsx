import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 gap-6">
            <h1 className="text-4xl font-serif font-bold text-foreground">Page not found</h1>
            <p className="max-w-[400px] text-muted-foreground">
                This page doesn&apos;t exist. It may have moved, or the URL may have a typo.
            </p>
            <Button size="lg" asChild>
                <Link href="/">Back to home</Link>
            </Button>
        </section>
    );
}
