# Juan Muñoz - Portfolio

Portfolio personal de Juan Muñoz, Full Stack Developer especializado en Python, JavaScript, React, Next.js y AWS.

## 🚀 Tecnologías

- **Framework:** Next.js 14.2 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, shadcn/ui
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** React Icons, Lucide React
- **Font:** JetBrains Mono
- **Analytics:** Vercel Analytics & Speed Insights

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/juancodedev/portafolio.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 🛠️ Mejoras Recientes

### Errores Críticos Corregidos
- ✅ CSS typos corregidos en `page.tsx` (`max-w-[500px]`, `border border-accent`)
- ✅ Typo en `Stats.tsx` (eliminado `+` suelto)
- ✅ Eliminado `require('dotenv').config()` de contact page (no funciona en cliente)
- ✅ Removidos `console.log()` de production
- ✅ Typos textuales: Portfolio, Freelance, Full Stack, experiences, technologies

### SEO & Metadata Mejorado
- ✅ Metadata completa con Open Graph y Twitter Cards
- ✅ Keywords optimizados para SEO
- ✅ Metadata específica por página (Home, Work, Resume, Services, Contact)
- ✅ Robots meta tags configurados
- ✅ Favicon dinámico generado (`icon.tsx` y `apple-icon.tsx`)

### Performance & UX
- ✅ Animaciones optimizadas (delay reducido de 2.4s a 0.4-0.6s)
- ✅ Transiciones más fluidas y rápidas

## 📝 Tareas Pendientes

### 1. Configurar URL del Dominio
Reemplazar en `src/app/layout.tsx:28`:
```typescript
url: "https://your-domain.com", // ← Actualizar con tu dominio real
```

### 2. Google Search Console
Configurar verificación en `src/app/layout.tsx:57`:
```typescript
verification: {
  google: "your-google-verification-code", // ← Actualizar con código real
}
```

### 3. Variables de Entorno
Crear archivo `.env.local`:
```bash
NEXT_PUBLIC_URL=https://tu-api-backend.com/endpoint
```

### 4. Proyectos Reales
Actualizar `src/app/work/page.tsx` con proyectos reales:
- Reemplazar datos de ejemplo (Lorem ipsum)
- Agregar enlaces a GitHub y demos en vivo
- Actualizar imágenes de proyectos

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── contact/
│   │   ├── layout.tsx      # Metadata de contacto
│   │   └── page.tsx        # Formulario de contacto
│   ├── resume/
│   │   ├── layout.tsx      # Metadata de resume
│   │   └── page.tsx        # CV y skills
│   ├── services/
│   │   ├── layout.tsx      # Metadata de servicios
│   │   └── page.tsx        # Servicios ofrecidos
│   ├── work/
│   │   ├── layout.tsx      # Metadata de proyectos
│   │   └── page.tsx        # Portfolio de proyectos
│   ├── icon.tsx            # Favicon dinámico
│   ├── apple-icon.tsx      # Apple touch icon
│   ├── layout.tsx          # Layout principal + SEO
│   ├── page.tsx            # Home page
│   └── globals.css         # Estilos globales
├── components/
│   ├── ui/                 # Componentes de shadcn/ui
│   ├── Header.tsx
│   ├── Nav.tsx
│   ├── MobileNav.tsx
│   ├── Photo.tsx
│   ├── Social.tsx
│   ├── Stats.tsx
│   └── ...
└── lib/
    ├── schema.ts           # Validaciones Zod
    ├── utils.ts            # Utilidades
    └── _actions.ts         # Server actions
```

## 🚀 Deploy en Vercel

1. Hacer push a GitHub
2. Importar proyecto en [Vercel](https://vercel.com)
3. Configurar variables de entorno
4. Deploy automático

## 📧 Contacto

- **Email:** cl.jmunoz@gmail.com
- **Phone:** (+56) 998 307 778
- **GitHub:** [@juancodedev](https://github.com/juancodedev)

## 📄 Licencia

Este proyecto es personal y privado.
