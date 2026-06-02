export interface Project {
  num: string;
  category: 'frontend' | 'fullstack' | 'backend';
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

export const categories = ['all', 'frontend', 'fullstack', 'backend'] as const;
export type Category = typeof categories[number];

export const allProjects: Project[] = [
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
    live: 'https://quiverapp.juancode.dev/',
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
    image: '/assets/work/NearNow.png',
    live: 'https://nearnow.juancode.dev/',
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
    live: 'https://tappmesa.juancode.dev',
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
] as const;
