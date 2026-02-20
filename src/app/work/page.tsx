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

const allProjects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'Quilver CRM Archery club',
    description: 'A comprehensive club management platform for archery organizations, featuring member tracking, score recording, training session management, attendance via QR codes, and role-based access control for admins, treasurers, and athletes.',
    stack: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Vite' },
      { name: 'Tailwind CSS' },
      { name: 'Supabase' },
      { name: 'Shadcn/ui' },
      { name: 'React Query' },
      { name: 'React Router' },
      { name: 'Recharts' },
      { name: 'Zod' },
    ],
    image: '/assets/work/QuilverCRM.png',
    live: 'https://archer-hub-cloud.lovable.app',
    github: '',
  }, {
    num: '02',
    category: 'fullstack',
    title: 'Map services - Find your spot',
    description: 'An interactive mapping application that allows users to discover, pin, and manage spots on a live map. Built with Leaflet for geospatial visualization and Supabase for real-time data management.',
    stack: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Vite' },
      { name: 'Tailwind CSS' },
      { name: 'Supabase' },
      { name: 'Shadcn/ui' },
      { name: 'Leaflet' },
      { name: 'React Query' },
      { name: 'React Router' },
      { name: 'Zod' },
    ],
    image: '/assets/work/BussinesMap.png',
    live: 'https://map-your-spot-60.lovable.app',
    github: '',
  }, {
    num: '03',
    category: 'fullstack',
    title: 'CRM Restaurant - QR menu on table',
    description: 'A modern restaurant table management SaaS that streamlines reservations, ordering, and table assignment workflows, with real-time monitoring, error tracking via Sentry, and serverless deployment on Vercel.',
    stack: [
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Vite' },
      { name: 'Tailwind CSS' },
      { name: 'Supabase' },
      { name: 'Prisma' },
      { name: 'Radix UI' },
      { name: 'React Router' },
      { name: 'Sentry' },
      { name: 'Vercel' },
    ],
    image: '/assets/work/TappMesa.png',
    live: 'https://tappmesa.vercel.app',
    github: '',
  }, {
    num: '04',
    category: 'fullstack',
    title: 'UptimeGuard',
    description: 'A SaaS uptime monitoring dashboard that tracks the availability and performance of services over time, featuring authentication via NextAuth, visual charts with Recharts, and a Prisma-powered database layer.',
    stack: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Prisma' },
      { name: 'NextAuth.js' },
      { name: 'Recharts' },
    ],
    image: '/assets/work/UptimeGuard.png',
    live: 'https://vigilante-online.lovable.app',
    github: '',
  },
]

const categories = ['all', 'frontend', 'fullstack', 'backend'] as const;
type Category = typeof categories[number];

// Max tags to show inline; the rest collapse into a "+N" badge
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
        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center xl:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium capitalize transition-all duration-300 ${activeCategory === cat
                ? 'bg-accent text-primary border-accent'
                : 'border-white/20 text-white/60 hover:border-accent hover:text-accent'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center">
            <p className="text-6xl">🗂️</p>
            <h3 className="text-2xl font-bold text-white">No projects here yet</h3>
            <p className="text-white/50 max-w-xs">I haven't published any <span className="capitalize text-accent">{activeCategory}</span> projects yet. Check back soon!</p>
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            {/* Project info panel */}
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project?.num}</div>
                {/* project title */}
                <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                  {project?.title}
                </h2>
                <span className="text-accent capitalize text-sm -mt-6">{project?.category} project</span>
                {/* description */}
                <p className="text-white/60">{project?.description}</p>
                {/* stack — show max 5, rest as badge */}
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
                {/* border */}
                <div className="border border-white/20"></div>
                {/* buttons */}
                <div className="flex items-center gap-4">
                  {project?.live ? (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent><p>Live Project</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  ) : (
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-30 cursor-not-allowed">
                          <BsArrowUpRight className="text-white text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent><p>No live demo</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {project?.github ? (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent><p>Github repository</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  ) : (
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center opacity-30 cursor-not-allowed">
                          <BsGithub className="text-white text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent><p>Repo not available</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
            </div>

            {/* Swiper */}
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
                        <Image src={proj.image} fill className="object-cover" alt={proj.title} />
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