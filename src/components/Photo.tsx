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
                {/* Image — clean circular photo on light background */}
                <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative">
                    <Image
                        src="/assets/new_profile.svg"
                        priority
                        quality={100}
                        fill
                        alt="Juan Muñoz"
                        className="rounded-full object-cover"
                        fetchPriority="high"
                    />
                </div>
            </motion.div>
        </div>
    )
}

export default Photo
