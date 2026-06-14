# Design: Portfolio Redesign — Editorial Authority

## Technical Approach

Replace dark terminal-template (#1C1C22/#00ff99, JetBrains Mono everywhere) with a light editorial design driven by CSS custom properties through Tailwind. Serif headings (Source Serif 4) + sans body (Inter) + mono reserved for code snippets. Page transitions simplified from 1.4s stair animation to <300ms fade. Swiper carousel replaced with CSS Grid + filter chips. Content unified to single "19 years in technology" narrative. All shadcn/ui components restyled via CSS vars; no new component library.

## Architecture Decisions

| Decision | Choice | Alternatives | Rationale |
|----------|--------|--------------|-----------|
| Heading font | Source Serif 4 (variable) | Playfair Display, Merriweather, Lora, DM Serif Display | Warm editorial authority. Variable weight for fine-tuning. Good screen x-height. Playfair too fashion/luxury; Merriweather too literary. |
| Body font | Inter (variable) | DM Sans, Plus Jakarta Sans, Satoshi | Best readability at 14-16px. Neutral tone lets headings lead. Excellent interop with next/font. |
| Accent color | Deep Teal #0D9488 (teal-600) | Terracotta, Amber, Slate Blue, Coral | Calm trust + technical precision. Warm enough for editorial warmth brief. Beats amber (casual), coral (loud), terracotta (too warm for tech). |
| Background | #FAFAF9 off-white (stone-50) | Pure #FFF, #FEFEF9, #F8F8F5 | Slightly warm without looking yellow. Cards at #FFF pop subtly against it — editorial depth without heavy shadows. |
| Transition | Simple fade < 300ms (no stairs) | 1.4s stair, no transition, morph | Removes StairTransition, Stairs, PageTransition components. AnimatePresence fade only. Fast, accessible. |
| Work layout | CSS Grid + filter chips | Swiper carousel, masonry | All projects visible. Filter narrows by category. No Swiper dependency. Better scannability. |
| Card design | Problem → solution → impact structure | Description-only, feature-list | Communicates real engineering value. Aligns with proposal's "project results showcase." |
| Nav CTA | "Get in touch" | "Hire me", "Contact me" | Matches editorial warmth. "Hire me" is transactional — wrong tone for 19-year professional. |

## Typographic Scale

```
text-xs:  0.75rem  — captions, code badges (JetBrains Mono 400)
text-sm:  0.875rem — meta, labels (Inter 400)
text-base: 1rem    — body (Inter 400)
text-lg:  1.125rem — lead/intro (Inter 500)
text-xl:  1.25rem  — card titles (Source Serif 600)
text-2xl: 1.5rem   — section subtitles
text-3xl: 1.875rem — tab headings (Source Serif 600)
text-4xl: 2.25rem  — section headings (Source Serif 700)
text-5xl: 3rem     — hero subtitle (Source Serif 400)
text-6xl: 3.75rem  — hero name (Source Serif 700)
text-7xl: 4.5rem   — decorative numbers (Source Serif 700)
```

Weights: Source Serif 4 (400,600,700), Inter (400,500,600), JetBrains Mono (400,500).

## CSS Custom Properties

```css
--background: 60 9% 98%;        /* #FAFAF9 */
--foreground: 0 0% 10%;         /* #1A1A1A */
--card: 0 0% 100%;              /* #FFFFFF */
--card-foreground: 0 0% 10%;
--primary: 175 84% 32%;         /* #0D9488 */
--primary-foreground: 0 0% 100%;
--secondary: 60 5% 96%;         /* #F5F5F4 */
--secondary-foreground: 0 0% 10%;
--muted: 60 5% 96%;             /* #F5F5F4 */
--muted-foreground: 33 5% 42%;  /* #78716C (stone-500) */
--accent: 175 84% 32%;
--accent-foreground: 0 0% 100%;
--border: 24 6% 90%;            /* #E7E5E4 (stone-200) */
--ring: 175 84% 32%;
--radius: 0.5rem;
```

All Tailwind colors reference `hsl(var(--name))` — single source of truth. Dark variants can be added later by toggling a class.

## Spacing System

- Container: max-w-[1200px], px-4 mobile → px-8 desktop
- Section vertical: py-16 mobile → py-24 desktop
- Card padding: p-6 mobile → p-8 desktop
- Grid gaps: gap-8 (2rem) for project cards, gap-16 for page sections
- Asymmetric hero: 2-column on desktop (text 50% + photo 40%), stacked on mobile
- Generous whitespace: section dividers via border-t border-border, not heavy backgrounds

## File Changes

| File | Action | Notes |
|------|--------|-------|
| `src/app/globals.css` | Replace | CSS vars, font-face, typography utils. Remove .h1/.h2/.h3, .text-outline. |
| `tailwind.config.ts` | Replace | fontFamily: serif + sans + mono. All colors via hsl(var(--x)). |
| `src/app/layout.tsx` | Modify | Load Inter + Source Serif 4. Remove Stair/PageTransition. Inline fade wrapper. |
| `src/components/{StairTransition,Stairs,PageTransition,Stats,WorkSliderBtns}.tsx` | Delete | Replaced by inline fade or grid. |
| `src/data/stats.ts` | Delete | No longer referenced. |
| `src/app/page.tsx` | Replace | Narrative hero: 19-year story, SVG photo, "Get in touch" CTA. |
| `src/components/Photo.tsx` | Modify | Remove spinning circle. Static SVG, warm border, no motion. |
| `src/app/work/page.tsx` | Replace | CSS Grid + ProjectCard. Filter chips. Remove Swiper. |
| `src/components/ProjectCard.tsx` | Create | Problem→solution→impact. Live + GitHub links. Stack badges. |
| `src/app/services/page.tsx` | Replace | Business-outcome copy. ServiceCard grid. |
| `src/components/ServiceCard.tsx` | Create | Icon, title, value-prop, CTA link. |
| `src/app/resume/ResumeClient.tsx` | Replace | Timeline + SkillGroup + story-driven About. No phone. |
| `src/components/{Timeline,SkillGroup}.tsx` | Create | Timeline: dot+line+content. SkillGroup: category + badges. |
| `src/data/resume.tsx` | Replace | Remove phone, "Junior", "training". Unified 19yr narrative. |
| `src/data/projects.ts` | Modify | Add real GitHub URLs. |
| `src/app/contact/page.tsx` | Modify | Remove phone info. Light theme form. |
| `src/app/not-found.tsx` | Modify | Restyle with new typography + colors. |
| `src/components/{Header,Nav,MobileNav,Social}.tsx` | Modify | "Hire me"→"Get in touch". Light theme. Focus-visible. aria-labels. |
| `src/components/ui/{button,input,textarea,select,tabs,sheet}.tsx` | Modify | Light theme variants. focus-visible: ring-2 ring-ring ring-offset-2. |
| `src/lib/schema.ts` | Modify | Remove phone_number from Zod schema. |

## Animation Strategy

| What | How | Why |
|------|-----|-----|
| Page enter | AnimatePresence opacity 0→1, 250ms ease-out | Replace 1.4s stairs. Fast, accessible. |
| Section reveal | Framer Motion whileInView: opacity + y-8→y-0, 400ms | Subtle scroll narrative. |
| Card hover | scale-[1.02] + shadow transition, 200ms | Micro-interaction, not distracting. |
| No animation | Body text, nav, forms, focus indicators | Respects prefers-reduced-motion. |

## Accessibility Baseline

- focus-visible: `ring-2 ring-ring ring-offset-2` on all interactive elements
- aria-label on all icon-only buttons and links
- Form inputs have visible labels or sr-only labels where visually hidden
- WCAG AA: foreground-on-background ≥ 4.5:1 (normal), ≥ 3:1 (large text)
- Keyboard navigation: tab order follows visual order

## Testing Strategy (Manual)

| Gate | Command | Criterion |
|------|---------|-----------|
| Build | `pnpm build` | Zero errors |
| Lint | `pnpm lint` | Zero errors |
| Contrast | axe DevTools browser extension | Zero violations |
| Breakpoints | Manual review at 375/768/1200px | Layout intact, readable text |
| Keyboard | Tab through all pages | All focus-visible, all reachable |

## Rollout

No migration. All changes in `src/`. Rollback: `git revert`. Vercel instant rollback available.

## Open Questions

- [ ] GitHub URLs for all 4 projects — user must provide before work page implementation
- [ ] SVG photo: keep or replace with raster? Current SVG is monotone but works with light bg
- [ ] phone_number field: remove entirely from form schema or make optional? Proposal says "remove phone from all data and UI"
- [ ] Final copy for About/Experience narrative — user must review before merge
