"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 0.2,
                        duration: 0.6,
                        ease: "easeOut"
                    },
                }}
            >
                {/* Photo — rounded corners, no circular crop, clean on light background */}
                <div className="w-[300px] h-[360px] xl:w-[460px] xl:h-[540px] relative">
                    <Image
                        src="/assets/new_profile.webp"
                        priority
                        quality={100}
                        fill
                        alt="Juan Muñoz"
                        className="rounded-3xl object-cover object-top"
                        fetchPriority="high"
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default Photo
