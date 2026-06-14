# Resume Page Specification

## Purpose

Story-driven resume page with an About section telling a narrative story, an experience timeline, skills grouped by category, and properly styled tabs. Removes phone numbers, "Junior" references, and "currently training" text.

## Requirements

### Requirement: Tab Navigation

The resume page MUST use tabs with clear active state styling (deep teal accent on active tab, warm highlight).

#### Scenario: Active tab is visually distinct

- GIVEN the resume page loads with the default tab selected
- WHEN any tab is clicked
- THEN the active tab SHALL render with deep teal accent styling (color or border), and the inactive tabs SHALL render in muted foreground

#### Scenario: Tab content switches correctly

- GIVEN the "Experience" tab is active
- WHEN the user clicks "Skills"
- THEN the content area SHALL show the Skills section and hide the Experience section

### Requirement: Story-Driven About Section

The About Me section MUST present a narrative story of the user's career, NOT a contact card. It SHALL begin with the unified 19-year narrative and describe each career chapter building to current capability.

#### Scenario: About section tells career story

- GIVEN the resume page loads
- WHEN the About tab is active
- THEN the content SHALL be narrative paragraphs describing the user's career progression, NOT a list of contact details

#### Scenario: No contact card format

- GIVEN the About section content
- WHEN inspecting the DOM structure
- THEN the content SHALL NOT use card-like layout with icon+label pairs (phone, email, location)

### Requirement: Experience Timeline

The work experience section MUST render as a vertical timeline using a Timeline component with dot, line, and content elements.

#### Scenario: Timeline renders chronologically

- GIVEN the Experience tab is active
- WHEN the timeline renders
- THEN entries SHALL appear in reverse chronological order, each with a timeline dot, connecting vertical line, and content block containing role, company, dates, and description

#### Scenario: Timeline is responsive

- GIVEN the viewport is mobile (< 768px)
- WHEN the timeline renders
- THEN dots and lines SHALL align to the left edge without content overflow

### Requirement: Skills Grouped by Category

The skills section MUST group technologies by category (Frontend, Backend, DevOps, Tools) using a SkillGroup component, each rendering its category label and technology badges.

#### Scenario: Skills render in categories

- GIVEN the Skills tab is active
- WHEN the section renders
- THEN skills SHALL appear grouped under "Frontend", "Backend", "DevOps", "Tools" headings, each group showing relevant technology badges

#### Scenario: Badges use monospace font

- GIVEN any technology badge in the skills section
- WHEN the badge renders
- THEN its text SHALL use JetBrains Mono at text-xs size

### Requirement: Removed Content

The resume page SHALL NOT contain: any phone number, the text "Currently training in React", the word "Junior", or any conflicting experience claims.

#### Scenario: No phone number in resume

- GIVEN the resume page renders
- WHEN scanning all content and data files (resume.tsx)
- THEN no phone number string SHALL appear

#### Scenario: No training text

- GIVEN the resume page renders
- WHEN inspecting all text content
- THEN the string "training" SHALL NOT appear, and "Currently training in React" SHALL NOT appear

#### Scenario: No Junior references

- GIVEN the resume page renders
- WHEN inspecting all text content and data
- THEN the word "Junior" SHALL NOT appear in any title, description, or metadata

#### Scenario: Consistent 19-year narrative

- GIVEN any experience or about text on the resume page
- WHEN counting years of experience mentioned
- THEN there SHALL be exactly one experience claim, stating 19 years in technology
