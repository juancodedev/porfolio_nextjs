# Juan Muñoz - Portfolio

Portfolio personal de **Juan Muñoz**, Full Stack Developer especializado en Python, JavaScript, React, Next.js y AWS.  
Construido con **Next.js 16** (App Router), **TypeScript** y **Tailwind CSS**.

## 🚀 Stack Tecnológico

| Categoría        | Tecnologías                                                    |
| ---------------- | -------------------------------------------------------------- |
| **Framework**    | Next.js 16.2.4 (App Router)                                    |
| **Lenguaje**     | TypeScript 6                                                   |
| **Estilos**      | Tailwind CSS 3 + tailwindcss-animate                           |
| **UI**           | Radix UI (Dialog, Select, Tabs, Tooltip, ScrollArea) + shadcn/ui |
| **Animaciones**  | Framer Motion 12 + Swiper 12 (carruseles)                     |
| **Forms**        | React Hook Form 7 + Zod 4                                     |
| **Iconos**       | React Icons, Lucide React                                     |
| **Tipografía**   | JetBrains Mono (via next/font)                                 |
| **Analíticas**   | @vercel/analytics + @vercel/speed-insights                     |

## 📦 Instalación

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

> El proyecto usa **pnpm** como package manager.

## 🗺️ Estructura

```
src/
├── app/
│   ├── contact/        # Formulario de contacto (React Hook Form + Zod)
│   ├── resume/         # CV interactivo con tabs
│   ├── services/       # Servicios ofrecidos
│   ├── work/           # Portfolio de proyectos con Swiper
│   ├── layout.tsx      # Layout raíz + SEO / Open Graph / Twitter Cards
│   ├── page.tsx        # Home con hero, stats y foto animada
│   ├── not-found.tsx   # Página 404 personalizada
│   ├── icon.tsx        # Favicon dinámico "JM"
│   ├── apple-icon.tsx  # Apple touch icon
│   ├── sitemap.ts      # Sitemap estático
│   └── robots.ts       # Configuración robots
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Header con navegación desktop/mobile
│   ├── Nav.tsx         # Nav desktop
│   ├── MobileNav.tsx   # Drawer mobile con Radix Sheet
│   ├── Photo.tsx       # Foto animada con Framer Motion
│   ├── Social.tsx      # Links redes sociales
│   ├── Stats.tsx       # Contadores animados (CountUp)
│   ├── Stairs.tsx      # Animación de escalera para transiciones
│   ├── StairTransition.tsx
│   ├── PageTransition.tsx
│   └── WorkSliderBtns.tsx
├── lib/
│   ├── schema.ts       # Esquema Zod para el formulario
│   ├── utils.ts        # cn() utility
│   └── _actions.ts     # Server action
└── types/
    └── swiper.d.ts     # Tipos para módulos CSS de Swiper
```

## 📄 Páginas

- **`/`** — Home con hero, stats, foto y CV descargable
- **`/services`** — Servicios: Web Dev, Backend, Integración, Consultoría
- **`/resume`** — CV interactivo (Experiencia, Educación, Skills, About Me)
- **`/work`** — Proyectos destacados con filtros y carrusel
- **`/contact`** — Formulario de contacto (con pre-selección de servicio vía query param)

## 🛠️ Proyectos Destacados

| Proyecto               | Tech Stack                                    | Live                                      |
| ---------------------- | --------------------------------------------- | ----------------------------------------- |
| Quilver CRM            | React, Supabase, Shadcn/ui, Recharts          | [quiverapp.juancode.dev](https://quiverapp.juancode.dev) |
| Map Services (NearNow) | React, Leaflet, Supabase, React Query         | [nearnow.juancode.dev](https://nearnow.juancode.dev)   |
| TappMesa (CRM Rest.)   | React, Prisma, Supabase, Sentry               | [tappmesa.juancode.dev](https://tappmesa.juancode.dev) |
| UptimeGuard            | Next.js, NextAuth, Prisma, Recharts           | [vigilante-online.lovable.app](https://vigilante-online.lovable.app) |

## 🌐 Dominio

El sitio está desplegado en **[juancodedev.dev](https://www.juancodedev.dev)** con Vercel.  
Metadata completa con Open Graph y Twitter Cards configurada.

## 📬 Contacto

- **Email:** cl.jmunoz@gmail.com
- **Teléfono:** (+56) 998 307 778
- **GitHub:** [@juancodedev](https://github.com/juancodedev)

## 📄 Licencia

Proyecto personal y privado.
