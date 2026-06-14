# Exploration: Portfolio Redesign — Juan Muñoz

## Current State

The portfolio is a Next.js 16 App Router site built from a tutorial template (recognizable from stair transitions, photo circle animation, dark theme with neon green accent). It uses JetBrains Mono universally (headings + body + UI), a single dark background color (`#1C1C22`), and a `#00ff99` accent. The site has 5 routes: Home, Services, Resume, Work, Contact. All pages use Framer Motion for entry animations and a 1.4s stair transition between pages. No testing, no CI/CD, no blog. Four projects shown with zero GitHub links. Content data is split between `/src/data/` (projects, resume, stats) and hardcoded in component files.

## Affected Areas

### Visual/Design System
- `src/app/globals.css` — Font family, heading classes, text-outline effect, body styles. Complete redesign needed.
- `tailwind.config.ts` — Color palette (hardcoded `#1C1C22`, `#00ff99`), single font family, no proper design tokens. Replace with semantic tokens.
- `src/app/layout.tsx` — JetBrains Mono as only font, metadata descriptions inconsistent with content. Add font pairing, fix metadata.
- `src/components/Photo.tsx` — Spinning dashed circle animation (looks like loading spinner), SVG profile image. Redesign photo presentation.
- `src/components/StairTransition.tsx` + `Stairs.tsx` — 1.4s page transition. Replace with fast or no transition.
- `src/components/PageTransition.tsx` — Dark overlay fade. Redundant with stair transition.
- `src/components/ui/button.tsx` — Accent colors baked in. Will need to adapt to new palette.
- `src/components/ui/` (all) — shadcn/ui components inherit current CSS variables. Update CSS custom properties.

### Content/Narrative
- `src/app/page.tsx` — Hero: "3+ years in Python & React". Stats with inconsistent experience claims. Redesign with clear 19-year narrative.
- `src/data/resume.tsx` — "Currently training in React" text contradicts portfolio existence. Multiple conflicting experience claims. Junior position titles undermine authority. Redesign copy strategy.
- `src/data/stats.ts` — 3 years vs 19 years inconsistency. "Technologies, Real experience" awkward English. Redesign metrics.
- `src/data/projects.ts` — All projects have empty `github` fields. Need real links or honest presentation.
- `src/app/work/page.tsx` — Swiper carousel for projects, category filters, no GitHub links. Redesign as case studies or grid.
- `src/app/services/page.tsx` — Generic service descriptions. Redesign with business value language.
- `src/app/resume/ResumeClient.tsx` — Tabs UI, hardcoded cards, inconsistent copy. Redesign as timeline or editorial layout.
- `src/app/contact/page.tsx` — Phone number exposed, hardcoded API URL fallback to localhost. Redesign with privacy consideration and reliable form handling.

### Architecture
- `src/lib/navigation.ts` — Route definitions. May change if sections are added/removed.
- `src/lib/schema.ts` — Contact form validation. May need service list updates.
- `src/app/layout.tsx` — Metadata with "over 3 years" claim. Fix.

### Not Affected (Keep)
- Build tooling (Next.js 16, Tailwind 3.4, TypeScript 6)
- shadcn/ui component primitives (can be restyled via CSS variables)
- Framer Motion (reuse for micro-interactions, drop page transitions)
- Swiper (may keep or replace depending on project presentation format)
- React Hook Form + Zod (contact form logic stays, UI changes)
- Analytics + Speed Insights
- Utility libraries (clsx, tailwind-merge, cva)

## Design Audit Findings

### What Works
- **Stack quality**: Next.js 16 + Tailwind + shadcn/ui + Framer Motion is a solid modern foundation
- **Component architecture**: Clean separation between data, components, and pages
- **Navigation**: Centralized in `src/lib/navigation.ts` (per agents.md recommendations)
- **Contact form**: Proper Zod validation, Controller pattern for Select, Suspense boundary for useSearchParams
- **Responsive breakpoints**: Functional at different screen sizes
- **Vercel integration**: Analytics and Speed Insights configured

### What Doesn't Work

#### Visual Identity (CRITICAL)
1. **Monospace everywhere**: JetBrains Mono for body text severely harms readability. Using a code font for paragraphs is a junior dev tell.
2. **Single-color dark theme**: `#1C1C22` background, `#232329` cards, `#27272c` forms — nearly indistinguishable, no visual hierarchy.
3. **Neon green accent**: `#00ff99` reads as "hacker terminal" or "crypto startup," not "experienced professional."
4. **No typographic hierarchy**: `.h1`, `.h2`, `.h3` are just font-size + semibold. No letter-spacing, weight pairing, or font pairing.
5. **Text outline effect**: `-webkit-text-stroke` with `text-transparent` is a gimmick, not a design system choice.
6. **Template recognition**: The layout, stair transition, photo animation, and card styles match a popular YouTube tutorial exactly. This makes the site invisible in a sea of identical portfolios.

#### UX/Accessibility
1. **Page transitions**: 1.4 seconds minimum to navigate between pages. Violates perceived performance standards. Users will bounce.
2. **Spinning circle animation**: Continuous rotation around photo — distracting, reads as loading state.
3. **No dark/light toggle**: Dark-only, no user preference respect.
4. **Contrast issues**: `text-white/60` on dark backgrounds likely fails WCAG AA (documented in agents.md).
5. **Missing aria-labels, focus-visible styles, form labels** (documented in agents.md).

### Content Audit Findings

#### Critical Narrative Inconsistencies

| Location | Claim |
|----------|-------|
| `layout.tsx` meta description | "Over 3 years of experience" |
| `page.tsx` hero | "3+ years in Python & React" |
| `resume.tsx` about section | "more than 19 years of experience in the IT area" |
| `resume.tsx` about.info | "Experience: +3 Years" |
| `resume.tsx` experience.description | "over 19 years of IT experience" |
| `resume/layout.tsx` meta | "2+ years of experience" |
| `stats.ts` | "3 Years of Experience" |

**Seven conflicting experience claims across the site.** This is the single biggest credibility problem. A recruiter who reads the meta description ("over 3 years") and then sees "19 years" in the resume will question everything.

#### Other Content Issues

1. **"Currently training in React"**: `resume.tsx` education.description: *"I am currently training in React and next.js technologies to update my knowledge."* — This text CONTRIBUTES to the site being built in React/Next.js. It positions Juan as a student, not a professional shipping production apps. Must be removed or rewritten.

2. **Junior titles**: Resume shows "Full Stack Developer Jr." at both positions. Junior + 19 years IT = contradictory. Either remove "Jr." or reframe the narrative to show growth trajectory.

3. **Zero GitHub links**: All 4 projects have `github: ''`. The UI shows "Repo not available" tooltips. This destroys technical credibility — it looks like there's no code to show, or worse, that the projects aren't real.

4. **Phone number exposed**: `(+56) 998 307 778` in plain text on contact page. Privacy concern and spam risk.

5. **Generic copy**: "I can help transform your online venture", "Let's combine our strengths", "resolute, dynamic professional" — reads as AI-generated filler, not a real person's voice.

6. **Missing sections**: No testimonials, no case studies, no process explanation, no blog/thought leadership, no clear differentiation from thousands of similar portfolios.

7. **English quality**: "Technologies, Real experience" (awkward capitalization), inconsistent heading capitalization ("My experience" vs "My Education"), non-native phrasing throughout.

#### The Story That SHOULD Be Told

Juan has **19 years in IT** — 15 in support/operations + 3+ in development. This is actually a POWERFUL narrative:
- He understands infrastructure, not just code
- He's solved real problems in production for nearly two decades
- He's made the transition from ops to dev — shows adaptability and drive
- He's not a bootcamp grad with 6 months of experience

The current site buries this story under "3 years" claims and "Junior" titles.

## Competitive Landscape

### What Senior Dev Portfolios Look Like
- **Typography-driven**: Serif + sans-serif pairing, proper hierarchy, generous white space
- **Content-first**: Case studies, thought leadership, metrics, not just tech stack lists
- **Restrained animation**: Micro-interactions only. No page transitions. Performance-first.
- **Light foundations**: Most senior portfolios use light or warm backgrounds. Dark themes exist but are executed with sophistication, not "terminal aesthetic."
- **Personal branding**: Memorable, opinionated, distinctive. Don't look like tutorials.

### Patterns for Dual Audience (Recruiters + Clients)
- **Recruiters need**: Clear timeline, verifiable experience, tech skills in context, work samples, professional narrative
- **Clients need**: Case studies with results, process explanation, engagement model, trust signals (testimonials, logos), clear CTA
- **Both need**: Fast loading, professional polish, clear communication, contact path

### Examples of Effective Patterns
- **brittanychiang.com**: Editorial layout, case study format, typography-driven, clean professionalism
- **joshwcomeau.com**: Educational content, design-systems approach, playful but polished
- **Agency sites**: Process sections, ROI language, client logos, structured CTA funnels
- **Contractor portfolios**: Problem → Solution → Result format, clear service tiers, direct contact

## Design Direction Proposals

### Direction 1: Editorial Authority (Light Foundation) ★ RECOMMENDED

**Concept**: Clean, typography-driven, magazine-layout feel. Communicates maturity, experience, thoughtfulness. A portfolio that says "I've been doing this for 19 years and I know what I'm talking about."

**Color Palette**:
- Background: Warm white/cream (`#FAFAF9` or `#FEFCF8`)
- Surface: Slightly darker warm white (`#F5F0EB`)
- Text: Dark charcoal (`#1A1A1A` or `#292524`)
- Muted text: Warm gray (`#78716C`)
- Accent: A single restrained color — options:
  - Deep teal (`#0D9488`) — calm, professional, tech-adjacent
  - Warm amber (`#D97706`) — approachable, energetic without neon
  - Rich indigo (`#4F46E5`) — trustworthy, traditional tech

**Typography**:
- **Headings**: Serif display — Cormorant Garamond, Source Serif 4, or Playfair Display. Communicates authority, tradition, depth.
- **Body**: Clean humanist sans — Inter, system-ui stack, or Geist. Readable at all sizes.
- **Code/Mono**: Keep JetBrains Mono but ONLY for code snippets — never body text.
- **Scale**: Major third (1.25) or perfect fourth (1.333) for clear hierarchy.

**Layout**:
- Long-scroll editorial with distinct sections separated by generous white space
- Hero: Strong personal statement + photo, minimal text
- Narrative timeline: 2003→today, showing IT ops → dev transition
- Case studies: Each project gets Problem/Approach/Result/Stack format
- Services: Clear tiers or process, not generic descriptions
- Contact: Conversation starter, not corporate form

**Pros**:
- Most directly counters "junior terminal template" problem
- Light foundations subconsciously communicate trust, transparency, experience
- Typography-driven design ages well, doesn't look dated
- Better readability for recruiters skimming on desktop
- Positions Juan as consultant/authority, not job seeker
- All current stack tools work perfectly for this direction

**Cons**:
- Light theme requires higher design polish — spacing, typography, imagery must all work
- No "cool developer" signaling (but that's the point)
- More content work needed (case studies, timeline narrative)
- May need new photography/assets for lighter presentation

**Effort**: High (complete visual + content overhaul)

---

### Direction 2: Refined Systems Dark

**Concept**: Dark theme but sophisticated — not "hacker terminal" but "architect's studio" or "control room." Deep, rich backgrounds with warm off-white text and strategic accent use.

**Color Palette**:
- Background: Deep navy/charcoal (`#0A0F1A` or `#0F172A`)
- Surface: Slightly elevated dark (`#1E293B`)
- Elevated: Card/container (`#1E293B`)
- Text: Warm off-white (`#E2E8F0` or `#F1F5F9`)
- Muted: Slate (`#64748B`)
- Accent: Warm gold (`#F59E0B` or `#EAB308`) — communicates value, not "hacker"

**Typography**:
- **Headings**: Distinctive geometric sans — DM Sans, Space Grotesk, or Clash Display. Bold, modern, confident.
- **Body**: Inter for readability. 
- **Mono**: JetBrains Mono for code only.

**Layout**:
- Asymmetric grid with strong visual anchors
- Stats as hero element (19 years, projects, technologies)
- Timeline-based narrative with horizontal scroll or vertical progression
- Card-based project grid with image-dominant cards
- Minimal but purposeful animations (entrance only, no page transitions)

**Pros**:
- Dark themes are comfortable for long browsing
- Easier to make "look polished" — dark hides imperfections
- Developers expect dark portfolios — meets audience expectation
- Less content restructuring needed (current data formats work)
- Photography pops more on dark backgrounds

**Cons**:
- Still "another dark portfolio" — must differentiate through layout and content
- Dark themes subconsciously read as "hiding something" for non-technical audiences
- Contrast accessibility harder to achieve on dark backgrounds
- Harder to communicate "warmth" and "approachability"
- Recruiters (often non-technical) may prefer light, professional presentations

**Effort**: Medium — keeps dark foundation, redesigns within it

---

### Direction 3: Warm Narrative (Hybrid Light/Dark Sections)

**Concept**: Personal, approachable, storytelling-driven. Alternating light and dark sections that guide the user through Juan's story. Human-first design that shows personality and depth.

**Color Palette**:
- Light sections: Warm cream/stone (`#FEFCF5`, `#F5F0E8`)
- Dark sections: Rich earth dark (`#1C1917` or `#292524`)
- Accent: Terracotta (`#D97706` or `#B45309`) or warm copper
- Text light sections: Dark brown/charcoal
- Text dark sections: Warm off-white

**Typography**:
- **Headings**: Display serif with personality — Playfair Display or Lora
- **Body**: Friendly but professional sans — Plus Jakarta Sans, Satoshi, or Geist
- **Mono**: JetBrains Mono for code

**Layout**:
- Alternating sections: Light → Dark → Light → Dark
  - Section 1 (Light): Hero + personal story
  - Section 2 (Dark): Projects/Work showcase
  - Section 3 (Light): Services + process
  - Section 4 (Dark): Timeline/experience
  - Section 5 (Light): Contact
- Each transition is a visual break that signals a new chapter
- Strong photography/illustration at section boundaries
- Micro-interactions, no page transitions

**Pros**:
- Most distinctive — very few portfolios do this well
- Best for storytelling — light/dark alternation creates natural narrative rhythm
- Works for both audiences: professional (light) + technical (dark)
- Shows design sophistication and intentionality
- Warm colors communicate approachability for freelance clients

**Cons**:
- Most complex to implement (two complete color systems)
- Harder to maintain consistency
- May feel "busy" if not executed cleanly
- Color system more complex in Tailwind config
- Risk of looking like a template if section transitions aren't unique

**Effort**: High (complex color system, section-specific designs)

---

## Recommendation

**Direction 1 (Editorial Authority)** is the strongest choice.

### Rationale

1. **Counter-positions effectively**: The current site's biggest problem is it looks like a junior developer's tutorial project. A light, typography-driven editorial design is the strongest possible counter-signal.

2. **Communicates experience**: Light foundations, generous white space, and serif typography subconsciously communicate maturity, trust, and authority. These are exactly the qualities a 19-year IT professional needs to project.

3. **Differentiates from competition**: 90%+ of developer portfolios are dark. Standing out is as simple as going light — but executing it well requires design taste. This portfolio CAN execute it well because the stack (Tailwind, shadcn/ui, Framer Motion) provides complete design control.

4. **Works for dual audience**: Recruiters expect professional, readable, scannable content. Clients expect trust and competence. An editorial layout serves both — recruiters scan the timeline and skills, clients read the case studies and process.

5. **Content-first approach**: The editorial format forces the content to be good. This will drive the narrative improvements (fixing experience claims, adding case studies, removing junior language) that the site desperately needs.

6. **Stack compatibility**: Nothing in the current stack prevents this direction. Tailwind handles any color system, shadcn/ui components can be restyled via CSS variables, Framer Motion can be used for tasteful micro-interactions.

### How to Avoid "Corporate Sterility"

The risk with editorial/light designs is they can feel cold or corporate. Mitigations:
- **Color accent**: Use a distinctive accent (warm amber or deep teal) with personality
- **Typography character**: Serif headings should have character, not be textbook Times New Roman
- **Personal photography**: Replace the SVG illustration with professional photography that shows Juan as a real person
- **Micro-interactions**: Subtle hover states, scroll-triggered reveals, and button feedback add warmth
- **Content voice**: Keep Juan's actual voice in the copy — approachable, direct, warm

## Risks

1. **Content is the bottleneck**: The visual redesign can be executed in days. Writing compelling case studies, fixing the narrative, and producing professional copy will take longer. Without content quality, even the best design fails.

2. **GitHub links remain empty**: If the project repos can't be made public, the work section needs an honest framing (e.g., "proprietary client work" or showing code snippets inline instead of repo links).

3. **Photography/assets**: Going from dark SVG illustration to light professional photography requires new assets. If Juan doesn't have professional photos, this needs to be solved (commission photographer, use high-quality stock, or design an illustration system).

4. **Scope creep**: A "complete redesign" can expand indefinitely. The proposal/first iteration should focus on: (a) design system + home page, (b) content narrative fix, (c) resume + work pages. Services and contact can follow in subsequent iterations.

5. **No testing infrastructure**: Major visual changes without tests mean regressions can only be caught manually. Consider adding basic visual regression or at minimum a build verification step.

6. **SEO impact**: Changing all pages, metadata, and URL structure (if any) can temporarily impact search rankings. Meta descriptions, titles, and content must be carefully migrated.

## Ready for Proposal

**Yes**. The exploration has identified:
- Clear problems with current design and content
- Three viable design directions with tradeoffs
- A recommended direction (Editorial Authority)
- Known risks and mitigation strategies
- Scope boundaries for the first iteration

The orchestrator should proceed to `sdd-propose` with Direction 1 as the preferred approach.
