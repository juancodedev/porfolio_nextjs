# Home Page Specification

## Purpose

Narrative-driven hero section communicating "19 years in technology, last 3+ building software" with a dual-path CTA. SVG photo re-framed for light background. Stats section and all phone numbers removed.

## Requirements

### Requirement: Narrative Hero

The home page MUST present a hero section with the unified narrative statement "19 years in technology, last 3+ building software" as the primary subheading, and the user's name as the main heading.

#### Scenario: Hero displays unified narrative

- GIVEN a visitor lands on the home page
- WHEN the page renders
- THEN the hero SHALL show the user's name in Source Serif 4 (700) at display size, immediately followed by "19 years in technology, last 3+ building software" as subtitle

#### Scenario: Narrative is the sole experience claim

- GIVEN the home page content
- WHEN scanning all text on the page
- THEN no text SHALL reference "Junior", "training", "learning", or any conflicting experience duration

### Requirement: SVG Photo Reframed

The user's SVG portrait MUST render as a static image (no spinning animation) with styling suited to a warm-white background.

#### Scenario: Static portrait renders correctly

- GIVEN the home page loads on any viewport
- WHEN the Photo component renders
- THEN the SVG SHALL display without rotation, spin, or any motion animation, and SHALL be visually legible against the #FAFAF9 background

### Requirement: Dual-Path CTA

The home page MUST present two call-to-action buttons: a primary "Get in touch" and a secondary "View my work" or equivalent, linking to `/contact` and `/work` respectively. The text "Hire me" SHALL NOT appear.

#### Scenario: Primary CTA leads to contact

- GIVEN a visitor on the home page
- WHEN they click "Get in touch"
- THEN they SHALL navigate to `/contact`

#### Scenario: Secondary CTA leads to work

- GIVEN a visitor on the home page
- WHEN they click "View my work"
- THEN they SHALL navigate to `/work`

#### Scenario: "Hire me" text is absent

- GIVEN any element on the home page
- WHEN inspecting all button text, links, and content
- THEN the string "Hire me" SHALL NOT appear

### Requirement: Social Links

Social media links (GitHub, LinkedIn, email) MUST render with the new visual style consistent with the light editorial design system.

#### Scenario: Social links use new styling

- GIVEN the home page renders social link icons
- WHEN the visitor sees the page
- THEN icons SHALL use the deep teal accent color or foreground color from design tokens, and SHALL have visible focus-visible ring on keyboard navigation

### Requirement: Stats Section Removed

The stats/counters section and its data file `src/data/stats.ts` SHALL be removed from the home page.

#### Scenario: Stats section does not render

- GIVEN the home page loads
- WHEN scrolling the entire page
- THEN no statistics counters, numbers, or metrics SHALL appear

### Requirement: Phone Number Absent

NO phone number SHALL appear anywhere on the home page — in text content, contact info, metadata, or data files.

#### Scenario: No phone on home page

- GIVEN the home page renders
- WHEN searching all rendered text and HTML
- THEN no phone number string SHALL be found
