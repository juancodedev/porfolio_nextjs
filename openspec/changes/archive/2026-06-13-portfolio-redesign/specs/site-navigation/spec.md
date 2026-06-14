# Site Navigation Specification

## Purpose

Header with editorial-style navigation and "Get in touch" CTA. Simplified page transitions (fade <300ms). Accessibility: aria-labels, focus-visible rings, sr-only form labels. Removes StairTransition, Stairs, WorkSliderBtns, and Swiper dependency.

## Requirements

### Requirement: Header CTA

The site header MUST display a "Get in touch" call-to-action button linking to `/contact`. The text "Hire me" SHALL NOT appear anywhere in navigation.

#### Scenario: Header shows editorial CTA

- GIVEN any page loads with the Header component
- WHEN the header renders
- THEN a button or link labeled "Get in touch" SHALL be visible in the top navigation, linking to `/contact`

#### Scenario: "Hire me" absent from navigation

- GIVEN the header and all navigation components (Nav, MobileNav)
- WHEN inspecting all rendered text
- THEN the string "Hire me" SHALL NOT appear

### Requirement: Page Transitions

Page transitions MUST use a simple opacity fade animation with duration <300ms using AnimatePresence. The StairTransition, Stairs, and PageTransition components SHALL be deleted.

#### Scenario: Fade transition on page change

- GIVEN a user navigates between pages
- WHEN the route changes
- THEN the outgoing page SHALL fade out and the incoming page SHALL fade in within 250ms, and no stair-step or slide animation SHALL play

#### Scenario: Removed transition components

- GIVEN the project source after the change
- WHEN searching for `StairTransition`, `Stairs`, and `PageTransition`
- THEN these files SHALL NOT exist in the codebase

### Requirement: Removed Dependencies

The Swiper dependency and WorkSliderBtns component SHALL be removed from the project. `pnpm build` MUST succeed without them.

#### Scenario: Swiper not in dependencies

- GIVEN the project's `package.json`
- WHEN checking dependencies
- THEN `swiper` SHALL NOT appear in dependencies or devDependencies

#### Scenario: Build succeeds without removed components

- GIVEN all removed components and dependencies are gone
- WHEN `pnpm build` executes
- THEN the build SHALL complete with zero errors and zero warnings

### Requirement: 404 Page Restyled

The not-found (404) page MUST use the new editorial design system — Source Serif 4 heading, Inter body, warm-white background, and deep teal accent for the return link.

#### Scenario: 404 uses design tokens

- GIVEN a user navigates to a non-existent route
- WHEN the 404 page renders
- THEN the heading SHALL use Source Serif 4, body SHALL use Inter, background SHALL be warm-white, and the return-home link SHALL use deep teal accent

### Requirement: Accessibility — aria-labels

All icon-only buttons and links MUST have descriptive `aria-label` attributes.

#### Scenario: Icon buttons are labeled

- GIVEN any icon-only button (social links, menu toggle, theme toggle placeholder)
- WHEN rendered in the DOM
- THEN the element SHALL include an `aria-label` attribute with a human-readable description (e.g., "GitHub profile", "Open menu")

### Requirement: Accessibility — focus-visible

All interactive elements (links, buttons, form inputs, chips, tabs) MUST show a visible focus ring on keyboard focus using `focus-visible:ring-2 ring-ring ring-offset-2`.

#### Scenario: Keyboard focus is visible

- GIVEN a user navigates via Tab key
- WHEN any interactive element receives focus
- THEN a visible ring SHALL appear around the focused element, and the ring SHALL disappear on blur

#### Scenario: Focus ring uses design tokens

- GIVEN any element shows focus-visible ring
- WHEN inspecting the ring color
- THEN it SHALL use `hsl(var(--ring))` matching the deep teal accent

### Requirement: Accessibility — Form Labels

All form inputs MUST have associated labels. If a label is visually hidden, it SHALL use `sr-only` class so screen readers can still access it.

#### Scenario: Form inputs have labels

- GIVEN the contact form renders
- WHEN inspecting each input element
- THEN every `<input>`, `<textarea>`, and `<select>` SHALL have either a visible `<label>` or an `aria-label` attribute, or an associated `<label>` with `sr-only` class
