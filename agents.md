# Plan de Mejoras — Portfolio Juan Muñoz

## 🐛 Bugs / Problemas Detectados

### 1. next.config.mjs — Propiedad inválida `qualities`
- **Archivo:** `next.config.mjs:4`
- **Problema:** `images.qualities` no existe en Next.js. La propiedad correcta es `quality` (number) o no usar `images` si no se necesita.
- **Acción:** Ya eliminado.

### 2. Contact form — URL hardcodeada
- **Archivo:** `src/app/contact/page.tsx:69`
- **Problema:** `NEXT_PUBLIC_URL || "http://localhost:3001/sql/agregar"` — si no hay env, apunta a localhost en producción.
- **Acción:** Definir `NEXT_PUBLIC_URL` en Vercel y crear `.env.local` con el endpoint real.

### 3. Sin feedback de error en server action (`_actions.ts`)
- **Archivo:** `src/lib/_actions.ts`
- **Problema:** La server action existe pero el formulario cliente la ignora y usa `fetch` directo a `NEXT_PUBLIC_URL`.
- **Acción:** Decidir si usar la server action o la API externa, y unificar el flujo.

### 4. Google Search Console — Código de verificación faltante
- **Archivo:** `src/app/layout.tsx:57`
- **Problema:** Hay un comentario con placeholder `// Add google: "your-code"...`
- **Acción:** Obtener y agregar el código de verificación de Google Search Console.

---

## ⚡ Performance

### 1. Imágenes sin dimensiones explícitas
- **Archivo:** `src/app/work/page.tsx:257`
- **Problema:** `fill` + `object-fit: cover` obliga a layout shift. Usar dimensiones fijas o `sizes` prop.
- **Acción:** Agregar `sizes` prop y considerar usar `next/legacy/image` con dimensiones.

### 2. Sin lazy loading en imágenes del work
- **Archivo:** `src/app/work/page.tsx`
- **Problema:** Swiper precarga todas las slides con `fill`. Podría beneficiarse de `loading="lazy"`.
- **Acción:** Agregar `loading="lazy"` y considerar `priority` solo en la primera slide.

### 3. Font loading sin display swap
- **Archivo:** `src/app/layout.tsx:10-13`
- **Problema:** JetBrains Mono cargado con 8 pesos (100-800). Muchos pesos incrementan el bundle de font.
- **Acción:** Reducir a pesos realmente usados (300, 400, 500, 700) y verificar que `display: swap` esté activo (por defecto en next/font).

### 4. CountUp con `duration={5}` alto
- **Archivo:** `src/components/Stats.tsx:30`
- **Problema:** 5 segundos de animación para números pequeños (3, 14, 24). Innecesariamente lento.
- **Acción:** Reducir a ~2s para mejor UX.

---

## ♿ Accesibilidad

### 1. Botones de iconos sin aria-label
- **Archivo:** `src/app/work/page.tsx:201-238`
- **Problema:** Los tooltips tienen `TooltipTrigger` y `TooltipContent` pero los botones (íconos de link a GitHub/Live) no tienen `aria-label`.
- **Acción:** Agregar `aria-label` a todos los botones de iconos.

### 2. Formulario sin `name` en inputs
- **Archivo:** `src/app/contact/page.tsx:105-118`
- **Problema:** Los inputs tienen `id` y `placeholder` pero algunos no tienen `name` explícito (aunque `register` lo asigna internamente con spread). Sin embargo, `first_name` tiene `id` pero no `htmlFor` en label (no hay label visible).
- **Acción:** Agregar labels ocultos (sr-only) para lectores de pantalla.

### 3. Contraste de colores
- **Problema:** `text-white/60` sobre `bg-[#27272c]` puede tener contraste insuficiente.
- **Acción:** Verificar ratio de contraste WCAG AA (mínimo 4.5:1) en textos pequeños.

### 4. Navegación por teclado en filtros de categoría
- **Archivo:** `src/app/work/page.tsx:144-156`
- **Problema:** Los botones de categoría son `<button>` correctos, pero no hay indicación visual de foco además del outline por defecto del navegador.
- **Acción:** Agregar estilos `focus-visible:` para mejor indicación de foco.

---

## 🧹 Mantenibilidad / Código

### 1. Datos hardcodeados en ResumeClient
- **Archivo:** `src/app/resume/ResumeClient.tsx`
- **Problema:** Experiencia, educación, skills y about están hardcodeados en el componente.
- **Acción:** Migrar a archivos de datos separados (`src/data/resume.ts`) para facilitar edición.

### 2. Datos de proyectos hardcodeados en Work page
- **Archivo:** `src/app/work/page.tsx:22-100`
- **Problema:** `allProjects` está en el mismo archivo del componente.
- **Acción:** Mover a `src/data/projects.ts`.

### 3. Stats hardcodeados
- **Archivo:** `src/components/Stats.tsx:4-18`
- **Problema:** Datos de stats están en el componente.
- **Acción:** Mover a `src/data/stats.ts`.

### 4. Mejorar tipado de proyectos
- **Archivo:** `src/app/work/page.tsx`
- **Problema:** No hay interfaz explícita para `Project`. Usar `typeof allProjects[0]` implícitamente.
- **Acción:** Definir interfaz `Project` e importarla.

### 5. Navegación duplicada (Nav + rutas en Header/MobileNav)
- **Problema:** Las rutas de navegación están repetidas en `Nav.tsx` y `MobileNav.tsx`.
- **Acción:** Centralizar en `src/lib/navigation.ts`.

---

## 🧪 Testing

### 1. Sin tests
- **Problema:** No hay tests unitarios ni de integración.
- **Acción:** Agregar Vitest + Testing Library para componentes clave:
  - `ContactForm` (validación Zod, renderizado condicional de errores)
  - `Stats` (CountUp renderiza valores correctos)
  - Filtros de categoría en Work page

---

## 🔧 DevOps / Infraestructura

### 1. CI/CD ausente
- **Problema:** No hay GitHub Actions configuradas.
- **Acción:** Agregar workflow básico: `lint` → `build` en PRs y push a main.

### 2. Sin verificación de types en CI
- **Problema:** `tsc --noEmit` no se ejecuta en CI.
- **Acción:** Agregar type checking al workflow.

---

## ✨ Features Potenciales

### 1. Modo oscuro / toggle
- **Problema:** El sitio usa `dark mode via class` en tailwind pero no hay toggle para cambiar entre modos.
- **Acción:** Implementar ThemeProvider con next-themes y botón de toggle.

### 2. Blog / Artículos técnicos
- **Valor:** Atraer tráfico orgánico y demostrar conocimiento técnico.
- **Acción:** Agregar sección `/blog` con MDX o CMS headless (Contentlayer / Sanity).

### 3. i18n (Español / Inglés)
- **Valor:** El portafolio está en inglés pero el público objetivo podría ser hispanohablante.
- **Acción:** Agregar next-intl y traducciones para páginas clave.

### 4. Testimonios / Recomendaciones
- **Valor:** Social proof para clientes potenciales.
- **Acción:** Sección con citas de clientes o colegas.

### 5. EmailJS / Resend para el formulario
- **Problema:** El formulario POSTea a un endpoint externo no especificado. Sin fallback si el endpoint falla.
- **Acción:** Usar Resend (integración con Vercel) o EmailJS como servicio de email transaccional server-side.

### 6. Imágenes WebP / AVIF
- **Problema:** Las imágenes de trabajo están en PNG. Next.js no las convierte automáticamente a formatos modernos si no se configura.
- **Acción:** Convertir assets a WebP y configurar `formats: ['image/avif', 'image/webp']` en next.config.

### 7. Puntuación en skills (nivel de expertise)
- **Problema:** Los skills en Resume solo muestran íconos, no nivel de dominio.
- **Acción:** Agregar barras de progreso visuales.

---

## Prioridades Sugeridas

| Prioridad | Área                     | Acción                                      |
| --------- | ------------------------ | ------------------------------------------- |
| 🔴 Alta   | Bugs                     | Configurar NEXT_PUBLIC_URL, Google Search Console |
| 🟡 Media  | Performance              | Imágenes lazy, reducir pesos de font, duración CountUp |
| 🟡 Media  | Accesibilidad            | aria-labels, contraste, focus-visible       |
| 🟢 Baja   | Mantenibilidad           | Separar datos hardcodeados, centralizar navegación |
| 🟢 Baja   | Testing                  | Vitest + componentes clave                  |
| 🔵 Futuro | Features                 | Blog, i18n, dark mode toggle, testimonios   |
