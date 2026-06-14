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
                {/* Image — no mix-blend-lighten, clean on light background */}
                <div className="w-[310px] h-[310px] xl:w-[510px] xl:h-[510px] relative">
                    <Image
                        src="/assets/new_profile.svg"
                        priority
                        quality={100}
                        fill
                        alt="Juan Muñoz"
                        className="pt-[23px] pb-[8px] pr-[15px] pl-[15px] rounded-full"
                        fetchPriority="high"
                    />
                </div>
                {/* Static subtle ring — no spinning animation */}
                <svg
                    className="absolute top-0 left-0 w-[310px] xl:w-[510px] h-[310px] xl:h-[510px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary/20"
                    />
                </svg>
            </motion.div>
        </div>
    )
}

export default Photo
