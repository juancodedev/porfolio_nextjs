# Work Showcase Specification

## Purpose

Display all 7 portfolio projects in a CSS Grid layout with category filter chips. Each project card communicates problem, solution, and impact — with live and GitHub links. Replaces the Swiper carousel.

## Requirements

### Requirement: CSS Grid Layout

The work page MUST display all projects in a responsive CSS Grid layout. The Swiper carousel dependency SHALL be removed from the project.

#### Scenario: Projects render in grid

- GIVEN the work page loads
- WHEN the viewport is ≥ 768px
- THEN projects SHALL display in a multi-column CSS Grid (2-3 columns depending on width), and Swiper SHALL NOT be imported or bundled

#### Scenario: Mobile single column

- GIVEN the work page loads
- WHEN the viewport is < 768px
- THEN projects SHALL stack in a single column with full-width cards

### Requirement: Category Filter Chips

The work page MUST render filter chips labeled "All", "Frontend", "Fullstack", and "Backend" above the project grid. Selecting a chip SHALL filter visible projects by matching category.

#### Scenario: Default shows all projects

- GIVEN the work page first loads
- WHEN no filter is selected
- THEN the "All" chip SHALL be in active state and all 7 projects SHALL be visible

#### Scenario: Filter shows matching projects only

- GIVEN the "Frontend" chip is clicked
- WHEN the filter activates
- THEN only projects with category "frontend" SHALL be visible, and the "Frontend" chip SHALL show active state styling

#### Scenario: No projects match filter

- GIVEN a filter is applied
- WHEN no projects match the selected category
- THEN a message SHALL display indicating no projects in that category

### Requirement: Project Card Design

Each project card MUST display: title, impact-focused description (problem → solution → impact), technology stack badges, a live demo link, and a GitHub link.

#### Scenario: Card renders all required elements

- GIVEN any project card in the grid
- WHEN the card renders
- THEN it SHALL show title, description, stack badges (JetBrains Mono), a "Live" link, and a "GitHub" link

#### Scenario: GitHub link points to real repository

- GIVEN a project card for Quilver CRM
- WHEN the GitHub link is rendered
- THEN its href SHALL be `https://github.com/juancodedev/archery-club-hub`

#### Scenario: Card hover micro-interaction

- GIVEN a user hovers over a project card
- WHEN the pointer enters the card boundary
- THEN the card SHALL scale to 1.02 with a shadow transition over 200ms

### Requirement: Project Data with GitHub URLs

The project data MUST contain 7 projects, each with the correct GitHub URL as specified:

| # | Project | GitHub URL |
|---|---------|------------|
| 1 | Quilver CRM | https://github.com/juancodedev/archery-club-hub |
| 2 | NearNow Maps | https://github.com/juancodedev/map-your-spot-60 |
| 3 | TappMesa CRM | https://github.com/juancodedev/tappmesa |
| 4 | UptimeGuard | https://github.com/juancodedev/uptime_saas_system |
| 5 | Idea Leads Hub | https://github.com/juancodedev/idea-leads-hub |
| 6 | VirtualCard Pro | https://github.com/juancodedev/v0-saa-s-virtual-id-cards |
| 7 | Album World Cup | https://github.com/juancodedev/album-world-cup |

#### Scenario: All 7 projects in data

- GIVEN the project data file is loaded
- WHEN iterating all entries
- THEN there SHALL be exactly 7 projects, each with a non-empty `github` URL matching the table above
