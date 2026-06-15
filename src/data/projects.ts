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
    title: 'Quilver CRM — Archery Club Hub',
    description:
      'Running an archery club means juggling memberships, training sessions, scores, and attendance — all with different roles. This SaaS platform brought everything into one place: QR check-in with GPS validation (Haversine algorithm) to prevent fake remote mark-ins, Mercado Pago subscriptions across 3 plans, and real-time dashboards. Built with 26 routes and 75 SQL migrations.',
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
      { name: 'Mercado Pago' },
    ],
    image: '/assets/work/QuilverCRM.png',
    live: 'https://quiverapp.juancode.dev/',
    github: 'https://github.com/juancodedev/archery-club-hub',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'NearNow Maps — Find Your Spot',
    description:
      'Finding and sharing local spots should be instant — not buried in spreadsheets or scattered apps. NearNow Maps gives users a live interactive map to discover, pin, and manage spots in real time, backed by Leaflet for geospatial precision and Supabase for instant sync. It turned what used to be a manual hunt into a single, shareable view.',
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
    github: 'https://github.com/juancodedev/map-your-spot-60',
  },
  {
    num: '03',
    category: 'fullstack',
    title: 'TappMesa — Restaurant Table CRM',
    description:
      'Restaurants lose revenue every night to missed reservations, double-booked tables, and slow order turnaround. TappMesa replaced paper and phone chaos with a SaaS table-management system — QR menus on every table, real-time reservation tracking, and integrated error monitoring via Sentry. Serverless deployment on Vercel keeps costs predictable as the restaurant scales.',
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
    github: 'https://github.com/juancodedev/tappmesa',
  },
  {
    num: '04',
    category: 'fullstack',
    title: 'UptimeGuard — Service Monitoring SaaS',
    description:
      'Downtime discovered by customers is downtime that already cost you. UptimeGuard flips the script: a monitoring dashboard that tracks availability, visualizes performance trends with Recharts, and authenticates users via NextAuth — all backed by Prisma-mapped PostgreSQL. Teams see issues before customers do.',
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
    github: 'https://github.com/juancodedev/uptime_saas_system',
  },
  {
    num: '05',
    category: 'fullstack',
    title: 'Idea Leads Hub — Commercial CRM',
    description:
      'Managing commercial leads without a system means deals slip through cracks daily. This CRM was built from the ground up with Clean Architecture, delivering 25 documented API endpoints (Swagger UI), 106 passing tests, and automated CI via GitHub Actions. Every lead, deal stage, and follow-up is tracked — nothing falls off the radar.',
    stack: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Supabase' },
      { name: 'Tailwind CSS' },
      { name: 'Shadcn/ui' },
      { name: 'Zod' },
      { name: 'Zustand' },
      { name: 'React Query' },
      { name: 'Jest' },
      { name: 'GitHub Actions' },
    ],
    image: '/assets/work/IdeaLeadsHub.png',
    live: '',
    github: 'https://github.com/juancodedev/idea-leads-hub',
  },
  {
    num: '06',
    category: 'fullstack',
    title: 'VirtualCard Pro — Digital ID SaaS',
    description:
      'Paper business cards are forgotten; virtual ID cards are always in your customer\'s pocket. VirtualCard Pro is a production SaaS with Stripe-powered subscriptions across 4 pricing plans, NextAuth authentication, and Prisma-backed PostgreSQL. Real-time usage analytics via Recharts let businesses see exactly how their cards perform.',
    stack: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Shadcn/ui' },
      { name: 'Prisma' },
      { name: 'NextAuth' },
      { name: 'Stripe' },
      { name: 'Recharts' },
      { name: 'PostgreSQL' },
    ],
    image: '/assets/work/VirtualCardPro.png',
    live: 'https://v0-saa-s-virtual-id-cards.vercel.app',
    github: 'https://github.com/juancodedev/v0-saa-s-virtual-id-cards',
  },
  {
    num: '07',
    category: 'fullstack',
    title: 'Album World Cup — Sticker Tracker',
    description:
      'The 2026 Panini World Cup album has 1,005 stickers across 48 teams. Tracking your collection manually is a spreadsheet nightmare. This app brings the sticker hunt online — track everything you have and need, earn a spot on the global ranking, and share your collection with friends. Built with 155 tests and Cloudflare Workers for lightning-fast edge performance.',
    stack: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Shadcn/ui' },
      { name: 'Supabase' },
      { name: 'React Query' },
      { name: 'Jest' },
      { name: 'Cloudflare Workers' },
    ],
    image: '/assets/work/AlbumWorldCup.png',
    live: '',
    github: 'https://github.com/juancodedev/album-world-cup',
  },
  {
    num: '08',
    category: 'fullstack',
    title: 'Wootric SaaS — Multi-Tenant Platform',
    description:
      'True multi-tenancy is one of the hardest architectural problems in SaaS. Wootric was built from the ground up with Next.js 16, Cloudflare Workers, and Supabase — completing 18 development stages. It features an 11-step authentication middleware (JWT, rate limiting, CSRF, RBAC, feature flags, quota check, audit log), 3 decoupled workers via Cloudflare Queues (Excel/PDF export to R2, sync, Stripe webhooks), and a role-based access system with 19 permissions across 4 roles.',
    stack: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Cloudflare Workers' },
      { name: 'Cloudflare KV' },
      { name: 'Cloudflare R2' },
      { name: 'Cloudflare Queues' },
      { name: 'Supabase' },
      { name: 'Drizzle ORM' },
      { name: 'Stripe' },
      { name: 'Tailwind CSS' },
    ],
    image: '/assets/work/Wootric.png',
    live: '',
    github: 'https://github.com/juancodedev/wootric-saas',
  },
];
