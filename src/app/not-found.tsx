"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4"
        >
            <div className="flex flex-col items-center gap-6">
                {/* Big 404 */}
                <div className="text-[10rem] leading-none font-extrabold text-transparent text-outline select-none">
                    404
                </div>

                <h1 className="text-4xl font-bold text-white">Page Not Found</h1>

                <p className="max-w-[400px] text-white/60">
                    Looks like this page doesn&apos;t exist. It might have been moved,
                    deleted, or you typed the URL incorrectly.
                </p>

                <Link href="/">
                    <Button variant="outline" size="lg" className="uppercase mt-4">
                        Back to Home
                    </Button>
                </Link>
            </div>
        </motion.section>
    );
}
