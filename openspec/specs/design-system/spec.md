# Design System Specification

## Purpose

Define typography, color, spacing, and CSS custom property tokens that drive the entire portfolio. Single source of truth via Tailwind config referencing `hsl(var(--x))` — dark-mode-ready.

## Requirements

### Requirement: Typography Tokens

The system MUST use Source Serif 4 (variable, weights 400/600/700) for all headings, Inter (variable, weights 400/500/600) for body text, and JetBrains Mono (400/500) exclusively for code snippets and technology badges.

#### Scenario: Headings render in serif

- GIVEN any page component renders a heading element (h1-h6)
- WHEN the page mounts
- THEN headings SHALL use Source Serif 4 with weight matching their semantic level (h1:700, h2-h3:600, h4-h6:400)

#### Scenario: Body text renders in sans-serif

- GIVEN any page component renders paragraph, label, or metadata text
- WHEN the page mounts
- THEN body text SHALL use Inter with weight 400 (base) or 500 (lead text)

#### Scenario: Code and tech badges render in monospace

- GIVEN a component renders inline code or a technology badge
- WHEN the page mounts
- THEN text SHALL use JetBrains Mono weight 400, and MUST NOT use JetBrains Mono for any other content

### Requirement: Color Tokens

The system MUST use a warm-white background (#FAFAF9, HSL 60 9% 98%), deep teal accent (#0D9488, HSL 175 84% 32%), and neutral foreground (#1A1A1A). All colors SHALL be referenced via CSS custom properties.

#### Scenario: Light editorial palette applied

- GIVEN the application loads under default (light) theme
- WHEN any page renders
- THEN background SHALL be hsl(var(--background)), accent interactive elements SHALL use hsl(var(--primary)), text SHALL be hsl(var(--foreground))

#### Scenario: Contrast meets WCAG AA

- GIVEN any foreground text on background
- WHEN measured with a contrast checker
- THEN normal text SHALL achieve ≥ 4.5:1 ratio, large text (≥18px bold) SHALL achieve ≥ 3:1 ratio

### Requirement: CSS Custom Properties

The system MUST define all design tokens as CSS custom properties on `:root` in `globals.css`, using HSL values to enable Tailwind's opacity modifier syntax. The file SHALL replace the current dark theme globals entirely.

#### Scenario: Tokens drive Tailwind classes

- GIVEN tokens are defined in globals.css as `--primary: 175 84% 32%`
- WHEN Tailwind applies `bg-primary` or `text-primary/80`
- THEN colors SHALL resolve via `hsl(var(--primary))` and `hsl(var(--primary) / 0.8)`

#### Scenario: Dark mode readiness without implementation

- GIVEN all colors reference `hsl(var(--x))` syntax
- WHEN a `.dark` class is added to `<html>` in the future
- THEN overriding `--x` values SHALL switch the entire palette without touching component code

### Requirement: Tailwind Configuration

The system SHALL extend `tailwind.config.ts` with `fontFamily` entries for `serif`, `sans`, and `mono`, and color entries that ALL reference `hsl(var(--x))` with no hardcoded hex values.

#### Scenario: Config exports correct font families

- GIVEN `tailwind.config.ts` is loaded by the build
- WHEN Tailwind generates utility classes
- THEN `font-serif` SHALL map to Source Serif 4, `font-sans` to Inter, `font-mono` to JetBrains Mono

#### Scenario: Build completes without errors

- GIVEN the updated `globals.css` and `tailwind.config.ts`
- WHEN `pnpm build` executes
- THEN the build SHALL complete with zero CSS-related errors
