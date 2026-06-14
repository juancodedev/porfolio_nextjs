# Services Page Specification

## Purpose

Full redesign of the services page with a professional, warm layout. Each service communicates business value — not a list of technologies. Copy invites collaboration ("cercano" tone). Service cards use Lucide React icons.

## Requirements

### Requirement: Business-Value Layout

The services page MUST present services as business solutions with impact-focused descriptions, avoiding technical skill lists. Copy SHALL use collaborative, warm language.

#### Scenario: Services describe business outcomes

- GIVEN the services page loads
- WHEN reading any service description
- THEN the copy SHALL describe the business problem solved and the outcome delivered, NOT list programming languages or frameworks

#### Scenario: Copy uses collaborative tone

- GIVEN the services page renders
- WHEN reading introductory text
- THEN the language SHALL convey partnership and collaboration using terms like "cercano", "together", or "partner", NOT transactional phrases like "hire me" or "my stack"

### Requirement: ServiceCard Components

Each service MUST render as a ServiceCard component containing: a Lucide React icon, a service title, a value-proposition description, and an optional CTA link.

#### Scenario: Card renders icon and content

- GIVEN a ServiceCard for "Web Development"
- WHEN the card renders
- THEN it SHALL display a Lucide React icon (e.g. Code2, Globe), the service title in Source Serif 4, and a description in Inter

#### Scenario: Cards display in responsive grid

- GIVEN the services page loads
- WHEN the viewport is ≥ 768px
- THEN ServiceCards SHALL display in a 2-3 column grid; on mobile (< 768px) they SHALL stack in a single column

#### Scenario: CTA links on relevant cards

- GIVEN a ServiceCard includes a CTA link
- WHEN the link renders
- THEN it SHALL use the deep teal accent color and link to the contact page or relevant section

### Requirement: Lucide React Icons

All service icons MUST come from the `lucide-react` package. No other icon library SHALL be introduced.

#### Scenario: Icons render from Lucide

- GIVEN any ServiceCard renders its icon
- WHEN inspecting the icon source
- THEN the icon SHALL be imported from `lucide-react` and SHALL be relevant to the service category (e.g., Globe for web, Server for backend, Palette for design)

### Requirement: No Technology Lists

Service descriptions SHALL NOT contain bullet lists of technologies, frameworks, or programming languages.

#### Scenario: No tech stack bullets in services

- GIVEN the services page renders
- WHEN scanning all service card content
- THEN no bullet list of technologies (e.g. "React, Node.js, PostgreSQL") SHALL appear within any service description
