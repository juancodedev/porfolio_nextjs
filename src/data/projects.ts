export interface Project {
  slug: string;
  title: string;
  tagline: string;
  /** One-sentence problem statement shown in lists. */
  summary: string;
  problem: string;
  solution: string;
  highlights: string[];
  stack: string[];
  /** Screenshot path. Projects without one render `outcome` as a typographic panel. */
  image?: string;
  /** Result shown instead of a screenshot, for work that cannot be pictured. */
  outcome?: string;
  live?: string;
  github?: string;
  /** Shown in the home page selected work section. */
  featured?: boolean;
}

export const allProjects: Project[] = [
  {
    slug: 'quilver-crm',
    title: 'Quilver CRM',
    tagline: 'Archery club hub',
    summary: 'Running an archery club means juggling memberships, sessions, scores, and attendance.',
    problem:
      'Running an archery club means juggling memberships, training sessions, scores, and attendance, all with different roles.',
    solution: 'This SaaS platform brought everything into one place.',
    highlights: [
      'QR check-in with GPS validation (Haversine algorithm) to prevent fake remote mark-ins',
      'Real-time dashboards',
      '26 routes and 75 SQL migrations',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'Shadcn/ui',
      'React Query',
      'React Router',
      'Recharts',
      'Zod',
    ],
    image: '/assets/work/QuilverCRM.png',
    live: 'https://quiverapp.juancode.dev/',
    github: 'https://github.com/juancodedev/archery-club-hub',
    featured: true,
  },
  {
    slug: 'wootric-saas',
    title: 'Wootric SaaS',
    tagline: 'Multi-tenant platform',
    summary: 'True multi-tenancy is one of the hardest architectural problems in SaaS.',
    problem: 'True multi-tenancy is one of the hardest architectural problems in SaaS.',
    solution:
      'Wootric was built from the ground up with Next.js 16, Cloudflare Workers, and Supabase, across 18 development stages.',
    highlights: [
      '11-step authentication middleware: JWT, rate limiting, CSRF, RBAC, feature flags, quota check, audit log',
      'Decoupled workers via Cloudflare Queues for Excel and PDF export to R2 and sync',
      'Role-based access with 19 permissions across 4 roles',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Cloudflare Workers',
      'Cloudflare KV',
      'Cloudflare R2',
      'Cloudflare Queues',
      'Supabase',
      'Drizzle ORM',
      'Tailwind CSS',
    ],
    outcome: '19 permissions across 4 roles, behind an 11-step authentication middleware',
    github: 'https://github.com/juancodedev/wootric-saas',
    featured: true,
  },
  {
    slug: 'idea-leads-hub',
    title: 'Idea Leads Hub',
    tagline: 'Commercial CRM',
    summary: 'Managing commercial leads without a system means deals slip through the cracks.',
    problem: 'Managing commercial leads without a system means deals slip through the cracks daily.',
    solution:
      'This CRM was built from the ground up with Clean Architecture. Every lead, deal stage, and follow-up is tracked.',
    highlights: ['25 documented API endpoints (Swagger UI)', '106 passing tests', 'Automated CI via GitHub Actions'],
    stack: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'Shadcn/ui',
      'Zod',
      'Zustand',
      'React Query',
      'Jest',
      'GitHub Actions',
    ],
    image: '/assets/work/IdeaLeadsHub.png',
    live: 'https://crm.juancode.dev/',
    github: 'https://github.com/juancodedev/idea-leads-hub',
    featured: true,
  },
  {
    slug: 'tappmesa',
    title: 'TappMesa',
    tagline: 'Restaurant table CRM',
    summary: 'Restaurants lose revenue to missed reservations, double-booked tables, and slow orders.',
    problem:
      'Restaurants lose revenue every night to missed reservations, double-booked tables, and slow order turnaround.',
    solution:
      'TappMesa replaced paper and phone chaos with a SaaS table-management system. Serverless deployment on Vercel keeps costs predictable as the restaurant scales.',
    highlights: ['QR menus on every table', 'Real-time reservation tracking', 'Integrated error monitoring via Sentry'],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'Prisma',
      'Radix UI',
      'React Router',
      'Sentry',
      'Vercel',
    ],
    image: '/assets/work/TappMesa.png',
    live: 'https://tappmesa.juancode.dev',
    github: 'https://github.com/juancodedev/tappmesa',
  },
  {
    slug: 'album-world-cup',
    title: 'Album World Cup',
    tagline: 'Sticker tracker',
    summary: 'The 2026 World Cup album has 1,005 stickers across 48 teams to keep track of.',
    problem:
      'The 2026 Panini World Cup album has 1,005 stickers across 48 teams. Tracking a collection manually is a spreadsheet nightmare.',
    solution: 'This app brings the sticker hunt online, running on Cloudflare Workers for fast edge performance.',
    highlights: ['Track every sticker you have and need', 'Global ranking', 'Share your collection with friends', '155 tests'],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn/ui',
      'Supabase',
      'React Query',
      'Jest',
      'Cloudflare Workers',
    ],
    image: '/assets/work/AlbumWorldCup.png',
    live: 'https://album.juancode.dev/',
    github: 'https://github.com/juancodedev/album-world-cup',
  },
  {
    slug: 'nearnow-maps',
    title: 'NearNow Maps',
    tagline: 'Find your spot',
    summary: 'Finding and sharing local spots should not mean digging through spreadsheets.',
    problem: 'Finding and sharing local spots should be instant, not buried in spreadsheets or scattered apps.',
    solution:
      'NearNow Maps gives users a live interactive map to discover, pin, and manage spots in real time. It turned a manual hunt into a single, shareable view.',
    highlights: ['Live interactive map', 'Leaflet for geospatial precision', 'Supabase for instant sync'],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'Shadcn/ui',
      'Leaflet',
      'React Query',
      'React Router',
      'Zod',
    ],
    image: '/assets/work/NearNow.png',
    live: 'https://nearnow.juancode.dev/',
  },
  {
    slug: 'uptimeguard',
    title: 'UptimeGuard',
    tagline: 'Service monitoring SaaS',
    summary: 'Downtime discovered by customers is downtime that already cost you.',
    problem: 'Downtime discovered by customers is downtime that already cost you.',
    solution: 'A monitoring dashboard that lets teams see issues before customers do.',
    highlights: [
      'Tracks availability and visualizes performance trends with Recharts',
      'Authentication via NextAuth',
      'Prisma-mapped PostgreSQL',
    ],
    stack: ['Next.js', 'TypeScript', 'React', 'Prisma', 'NextAuth.js', 'Recharts'],
    image: '/assets/work/UptimeGuard.png',
    live: 'https://vigilante-online.lovable.app',
    github: 'https://github.com/juancodedev/uptime_saas_system',
  },
  {
    slug: 'virtualcard-pro',
    title: 'VirtualCard Pro',
    tagline: 'Digital ID SaaS',
    summary: 'Paper business cards are forgotten; virtual ID cards stay in your customer’s pocket.',
    problem: "Paper business cards are forgotten; virtual ID cards are always in your customer's pocket.",
    solution: 'VirtualCard Pro is a SaaS that lets businesses issue virtual ID cards and see how they perform.',
    highlights: ['NextAuth authentication', 'Prisma-backed PostgreSQL', 'Real-time usage analytics via Recharts'],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui', 'Prisma', 'NextAuth', 'Recharts', 'PostgreSQL'],
    image: '/assets/work/VirtualCardPro.png',
    live: 'https://codecard.juancode.dev/',
  },
];

export const featuredProjects = allProjects.filter((project) => project.featured);

export const getProject = (slug: string) => allProjects.find((project) => project.slug === slug);

export const getNextProject = (slug: string) => {
  const index = allProjects.findIndex((project) => project.slug === slug);
  return allProjects[(index + 1) % allProjects.length];
};
