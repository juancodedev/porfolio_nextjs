"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div initial={{ opacity: 1 }} animate={{
                opacity: 1,
                transition: {
                    delay: 0,
                    duration: 0.4,
                    ease: "easeIn"
                },
            }}>
                {/* Image */}
                <motion.div
                    initial={{ opacity: 1 }} animate={{
                        opacity: 1,
                        transition: {
                            delay: 0,
                            duration: 0.4,
                            ease: "easeInOut"
                        },
                    }}
                    className="w-[310px] h-[310px] xl:w-[510px] xl:h-[510px] mix-blend-lighten absolute">
                    <Image
                        src="/assets/new_profile.svg"
                        priority
                        quality={100}
                        fill
                        alt="Juan Muñoz"
                        className="pt-[23px] pb-[8px] pr-[15px] pl-[15px] rounded-full"
                        fetchPriority="high"
                    />
                </motion.div>
                {/* circle */}
                <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[560px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/200/svg">
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition = {{
                            duration:10,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}>
                    </motion.circle>
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo