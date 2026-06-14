# Proposal: Portfolio Redesign

## Intent

Replace the "dark terminal junior template" with an Editorial Authority design that reflects 19 years of technology experience. Fix seven conflicting experience claims, remove junior positioning, add GitHub links, and rewrite copy with a professional narrative tone.

## Scope

### In Scope
- **Design system**: Light/warm palette (#FAFAF9 base, deep teal #0D9488 accent), serif headings (Source Serif 4) + sans body (Inter), Tailwind tokens, CSS custom properties
- **Home page**: Narrative-driven hero (19-year story), SVG photo reframed (no spinning animation), "Get in touch" CTA, stats section removed
- **Content fix**: Single "19 years in technology, last 3+ building software" narrative; remove "Junior" titles, "training in React," and phone number from all data and UI
- **Work page**: Grid replaces Swiper carousel; problem/solution/impact project cards; GitHub links on all 4 projects
- **Resume page**: Story-driven About section, skills grouped by category, timeline restructured
- **Services page**: Full redesign — business-value copy, warm/collaborative tone, new layout
- **Navigation**: "Hire me" → "Get in touch"; aria-labels, focus-visible, form labels
- **Transitions**: Replace 1.4s stair animation with fast or no transition

### Out of Scope
Testimonials, blog, dark mode, i18n, CI/CD, testing infrastructure, contact form backend, new pages, stack changes.

## Capabilities

### New Capabilities
- `design-system`: Color, typography, spacing tokens, CSS custom properties, Tailwind config
- `home-page`: Narrative hero, SVG photo, dual-path CTAs
- `work-showcase`: Project grid, GitHub links, problem/solution/impact cards
- `resume-page`: Timeline, categorized skills, story-driven about
- `services-page`: Business-solution layout, collaborative copy
- `site-navigation`: Header, CTAs, accessibility

### Modified Capabilities
None — `openspec/specs/` is empty.

## Approach

**Editorial Authority** (exploration-recommended). Light/warm background, serif+sans typography pairing, generous white space, single restrained accent. JetBrains Mono for code snippets only. Tailwind variables drive the design system; shadcn/ui restyled via CSS custom properties; Framer Motion limited to scroll-triggered micro-interactions. Content strategy: unified 19-year narrative where each career chapter builds to current capability. Projects framed as problem → solution → impact. Services as business outcomes, not tech lists.

## Affected Areas

| Area | Impact | Files |
|------|--------|-------|
| Design system | Replaced | `globals.css`, `tailwind.config.ts`, `layout.tsx` |
| Home page | Replaced | `page.tsx`, `stats.ts` (removed) |
| Work page | Replaced | `work/page.tsx`, `projects.ts` (GitHub URLs) |
| Resume page | Replaced | `resume/ResumeClient.tsx`, `resume.tsx` (copy) |
| Services page | Replaced | `services/page.tsx` |
| Contact page | Modified | `contact/page.tsx` (remove phone) |
| Components | Modified/removed | `Photo.tsx`, `Header.tsx`, `StairTransition.tsx`, `Stairs.tsx`, `PageTransition.tsx`, `ui/` |
| Navigation | Modified | `Header.tsx`, `navigation.ts` |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Content rewrites bottleneck visual work | Med | Write copy first; validate layout with placeholder text |
| Light theme demands higher design polish | Med | Start with typography+spacing; refine incrementally |
| GitHub repos not public before launch | Low | User confirmed; fallback to live-demo-only cards |
| SEO impact from metadata/content changes | Low | Preserve routes; update metadata incrementally |
| No visual regression testing | Med | Manual review per breakpoint; `pnpm build` as gate |

## Rollback Plan

Git revert. All changes within `src/`. No database, no API, no infrastructure. Restore `tailwind.config.ts` and `globals.css` from git history. Vercel dashboard instant rollback.

## Dependencies

- GitHub repos must be public with real URLs before work page implementation
- User must approve final copy for all pages

## Success Criteria

- [ ] Zero conflicting experience claims — single "19 years in technology" narrative
- [ ] All 4 projects show live + GitHub links
- [ ] Page transitions under 300ms or removed
- [ ] WCAG AA contrast on all text
- [ ] No "Junior", "training", "Hire me", or phone number in any content
- [ ] `pnpm lint && pnpm build` passes with zero errors
- [ ] Design system tokens documented in Tailwind config and CSS custom properties
