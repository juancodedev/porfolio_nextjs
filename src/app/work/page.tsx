"use client";

import { motion } from 'framer-motion'
import React, { useState, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link'
import Image from 'next/image'
import WorkSliderBtns from '@/components/WorkSliderBtns';
import type { Swiper as SwiperType } from 'swiper';
import { allProjects, categories, type Category } from '@/data/projects';

const MAX_VISIBLE_STACK = 5;

const Work = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const swiperRef = useRef<SwiperType | null>(null);

  const projects = activeCategory === 'all'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  const [project, setProject] = useState(allProjects[0]);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    const filtered = cat === 'all' ? allProjects : allProjects.filter(p => p.category === cat);
    setProject(filtered[0] ?? allProjects[0]);
    swiperRef.current?.slideTo(0);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setProject(projects[swiper.activeIndex]);
  };

  const visibleStack = project?.stack.slice(0, MAX_VISIBLE_STACK) ?? [];
  const hiddenCount = (project?.stack.length ?? 0) - MAX_VISIBLE_STACK;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-3 mb-8 justify-center xl:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium capitalize transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${activeCategory === cat
                ? 'bg-accent text-primary border-accent'
                : 'border-white/20 text-white/60 hover:border-accent hover:text-accent'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center">
            <p className="text-6xl">🗂️</p>
            <h3 className="text-2xl font-bold text-white">No projects here yet</h3>
            <p className="text-white/50 max-w-xs">I haven't published any <span className="capitalize text-accent">{activeCategory}</span> projects yet. Check back soon!</p>
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project?.num}</div>
                <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                  {project?.title}
                </h2>
                <span className="text-accent capitalize text-sm -mt-6">{project?.category} project</span>
                <p className="text-white/60">{project?.description}</p>
                <ul className="flex gap-3 flex-wrap items-center">
                  {visibleStack.map((item, index) => (
                    <li key={index} className="text-accent text-base">
                      {item.name}
                      {index !== visibleStack.length - 1 && ","}
                    </li>
                  ))}
                  {hiddenCount > 0 && (
                    <li className="text-xs bg-white/10 text-white/60 px-2 py-0.5 rounded-full">
                      +{hiddenCount} more
                    </li>
                  )}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  {project?.live ? (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live project">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group" aria-label="Live project">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent><p>Live Project</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  ) : (
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-30 cursor-not-allowed" aria-label="No live demo available">
                          <BsArrowUpRight className="text-white text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent><p>No live demo</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {project?.github ? (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group" aria-label="GitHub repository">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent><p>Github repository</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  ) : (
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-30 cursor-not-allowed" aria-label="Repository not available">
                          <BsGithub className="text-white text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent><p>Repo not available</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
              >
                {projects.map((proj, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={proj.image}
                          fill
                          className="object-cover"
                          alt={proj.title}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  iconsStyles=""
                />
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Work
