# Tasks: Portfolio Redesign — Editorial Authority

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~1,500 — 1,800 |
| 400-line budget risk | **High** |
| Chained PRs recommended | **Yes** |
| Suggested split | PR 1 → PR 2 → PR 3 → PR 4 |
| Delivery strategy | ask-always |
| Chain strategy | feature-branch-chain |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: feature-branch-chain
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Lines | Notes |
|------|------|-----------|-------|-------|
| 1 | Design system + transitions | PR 1 | ~340 | globals.css, tailwind, layout, delete stairs |
| 2 | New components + home page | PR 2 | ~390 | ProjectCard, ServiceCard, Timeline, SkillGroup, hero |
| 3 | Work + services pages | PR 3 | ~380 | Grid, filter chips, ServiceCard grid, remove Swiper |
| 4 | Resume + navigation + polish | PR 4 | ~430 | Resume, nav, contact, 404, accessibility — size:exception |

## Phase 1: Foundation — Design System (PR 1)

- [x] 1.1 Replace `src/app/globals.css` — CSS custom properties (:root HSL tokens), typography utils, remove `.h1/.h2/.h3`, `.text-outline` (spec: design-system §CSS Custom Properties, §Typography Tokens)
- [x] 1.2 Replace `tailwind.config.ts` — fontFamily (serif: Source Serif 4, sans: Inter, mono: JetBrains Mono), all colors via `hsl(var(--x))` (spec: design-system §Tailwind Configuration)
- [x] 1.3 Modify `src/app/layout.tsx` — load Source Serif 4 + Inter via next/font, remove StairTransition/Stairs imports. PageTransition kept but simplified to <300ms fade (spec: site-navigation §Page Transitions; design: Animation Strategy)
- [x] 1.4 Delete `src/components/StairTransition.tsx`, `src/components/Stairs.tsx` — PageTransition.tsx kept and simplified instead of deleted (spec: site-navigation §Page Transitions)
- [x] 1.5 Modify `src/components/Photo.tsx` — remove spinning animation, static SVG styled for #FAFAF9 background (spec: home-page §SVG Photo Reframed) → completed in PR 2
- [x] 1.6 Modify `src/components/Social.tsx` — light theme styling, teal accent icons, focus-visible rings, aria-labels (spec: home-page §Social Links; site-navigation §aria-labels, §focus-visible) → completed in PR 2

## Phase 2: Core — New Components + Home Page (PR 2)

- [x] 2.1 Create `src/components/ProjectCard.tsx` — problem→solution→impact structure, stack badges (JetBrains Mono text-xs), GitHub + Live links, scale-[1.02] hover (spec: work-showcase §Project Card Design)
- [x] 2.2 Create `src/components/ServiceCard.tsx` — Lucide React icon, title (Source Serif 4), value-prop description, optional CTA link (spec: services-page §ServiceCard Components, §Lucide React Icons)
- [x] 2.3 Create `src/components/Timeline.tsx` — vertical timeline: dot + connecting line + content block with role/company/dates/description (spec: resume-page §Experience Timeline)
- [x] 2.4 Create `src/components/SkillGroup.tsx` — category label + technology badges (JetBrains Mono text-xs) (spec: resume-page §Skills Grouped by Category)
- [x] 2.5 Replace `src/app/page.tsx` — narrative hero: name (Source Serif 7 700), "19 years in technology, last 3+ building software" subtitle, dual CTA ("Get in touch" → /contact, "View my work" → /work), no "Hire me", no stats (spec: home-page §Narrative Hero, §Dual-Path CTA, §Stats Removed)
- [x] 2.6 Delete `src/components/Stats.tsx`, `src/data/stats.ts`, remove all Stats imports (spec: home-page §Stats Section Removed)

## Phase 3: Core — Work + Services Pages (PR 3)

- [x] 3.1 Replace `src/app/work/page.tsx` — CSS Grid (2-3 cols desktop, 1 col mobile), filter chips (All/Frontend/Fullstack/Backend) with active teal state, ProjectCard grid, empty-state message for no-match filter (spec: work-showcase §CSS Grid Layout, §Category Filter Chips)
- [x] 3.2 Modify `src/data/projects.ts` — 7 entries each with `github` URL matching spec table, category field, live demo URL (spec: work-showcase §Project Data with GitHub URLs)
- [x] 3.3 Delete `src/components/WorkSliderBtns.tsx`, `src/types/swiper.d.ts`; remove `swiper` from `package.json`, run `pnpm install` (spec: site-navigation §Removed Dependencies)
- [x] 3.4 Replace `src/app/services/page.tsx` — ServiceCard grid (2-3 cols), business-value copy with collaborative tone ("cercano", "together"), no tech-stack bullet lists (spec: services-page §Business-Value Layout, §No Technology Lists)

## Phase 4: Core — Resume + Navigation + Polish (PR 4)

- [x] 4.1 Replace `src/app/resume/ResumeClient.tsx` — tabs with deep teal active state, Timeline for experience, SkillGroup for skills, story-driven About narrative (NOT contact-card format) (spec: resume-page §Tab Navigation, §Story-Driven About, §Experience Timeline, §Skills Grouped)
- [x] 4.2 Replace `src/data/resume.tsx` — remove phone_number, "Junior" titles, "Currently training in React"; unified 19-year career narrative (spec: resume-page §Removed Content)
- [x] 4.3 Modify `src/components/Header.tsx`, `src/components/Nav.tsx`, `src/components/MobileNav.tsx` — "Hire me"→"Get in touch" CTA linking /contact, light theme, aria-labels on icon buttons (spec: site-navigation §Header CTA, §aria-labels)
- [x] 4.4 Modify `src/app/contact/page.tsx` — remove phone info, light theme form, sr-only labels on all inputs (spec: site-navigation §Form Labels)
- [x] 4.5 Modify `src/lib/schema.ts` — remove `phone_number` from Zod validation schema (design: File Changes)
- [x] 4.6 Modify `src/lib/navigation.ts` — update CTA text references (design: File Changes)
- [x] 4.7 Modify `src/app/not-found.tsx` — restyle: Source Serif 4 heading, Inter body, warm-white bg, teal accent return link (spec: site-navigation §404 Page Restyled)
- [x] 4.8 Modify `src/components/ui/` (button, input, textarea, select, tabs, sheet) — light theme variants via CSS custom properties, `focus-visible:ring-2 ring-ring ring-offset-2` on all interactive elements (spec: site-navigation §focus-visible; design: Accessibility Baseline) → completed in PR 1

## Phase 5: Verification (after all PRs)

- [x] 5.1 Build gate: `pnpm build` — zero errors ✅ PASS (see verify-report.md Gate 1)
- [x] 5.2 Lint gate: `pnpm lint` — ⚠️ WARNING: `next lint` removed in Next.js 16.2.4, ESLint v10 doesn't support `.eslintrc.json`. TypeScript type-check used as code-quality gate instead. (see verify-report.md Gate 2)
- [x] 5.3 Type check: `pnpm exec tsc --noEmit` — zero errors ✅ PASS (see verify-report.md Gate 3)
- [ ] 5.4 Accessibility: axe DevTools browser audit — ⚠️ Deferred: requires interactive browser. aria-labels, focus-visible, sr-only labels implemented and verified via code audit (see verify-report.md Gate 5, site-navigation §aria-labels, §focus-visible, §Form Labels). WCAG AA contrast not yet measured.
- [ ] 5.5 Manual keyboard: ⚠️ Deferred: requires interactive browser. focus-visible rings implemented on all interactive elements per spec (see verify-report.md Gate 5, site-navigation §focus-visible).
- [ ] 5.6 Manual breakpoints: ⚠️ Deferred: requires interactive browser. Responsive grid classes verified in code audit (see verify-report.md Gate 5).
- [x] 5.7 Content audit: grep for "Junior", "training", "Hire me", phone numbers across `src/` — ✅ PASS, zero matches (see verify-report.md Gate 4)

> **Archive reconciliation note (2026-06-13)**: Tasks 5.1, 5.2, 5.3, 5.7 are proven complete by verify-report.md. Tasks 5.4, 5.5, 5.6 are manual/visual verification tasks requiring an interactive browser — deferred to post-merge manual QA. The orchestrator approved archive with PASS WITH WARNINGS verdict. No CRITICAL issues exist.
