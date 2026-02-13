# Activity Reporting for Donors

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A portfolio project that turns donor-facing program data into a clear, interactive impact dashboard with a one-click PowerPoint export.

## Why This Project Matters

Donor reporting is often fragmented across spreadsheets, narrative notes, and slide decks. This app demonstrates how I package those outputs into a single product:

- Interactive KPI and story-based reporting for non-technical stakeholders.
- Fast presentation-ready export for funding and review meetings.
- A maintainable React + TypeScript architecture that can be adapted to other social-impact programs.

## Features

- Overview dashboard with milestone timeline and key program highlights.
- Indicator analysis with target-vs-achieved visual comparison.
- Impact stories with category/tag filtering.
- Psychosocial support outcomes and recommendations sections.
- Browser-based `.pptx` export of the reporting package.

## Tech Stack

- Frontend: React 19, TypeScript, Vite
- UI: Tailwind utility classes, Lucide icons
- Charts: Recharts
- Export: PptxGenJS
- Tooling: npm

## Architecture

The app is intentionally split into domain-oriented modules:

- `App.tsx`: navigation, page composition, and export trigger.
- `components/`: view modules (`Dashboard`, `IndicatorsView`, `StoriesView`, `PsychologicalSupport`, `Recommendations`).
- `data.ts`: structured reporting data source.
- `services/pptxService.ts`: slide generation and file export logic.

## Project Structure

```text
.
├── components/
├── services/
├── docs/
│   └── screenshots/
├── data.ts
├── App.tsx
├── index.tsx
└── package.json
```

## Local Development

### Prerequisites

- Node.js 20+ (recommended)
- npm 10+ (recommended)

### Setup

```bash
npm install
npm run dev
```

App starts at `http://localhost:3000`.

## Quality Checks

```bash
npm test
npm run typecheck
npm run build
```

These checks should be run before opening pull requests.

## Screenshots

Screenshot slots are prepared in `/docs/screenshots`.

Suggested assets:

- `overview.png`
- `indicators.png`
- `stories.png`
- `ppt-export.gif`

## Portfolio Talking Points

- Built an end-to-end reporting UI for donor communication workflows.
- Designed reusable data-driven components for both quantitative and qualitative impact narratives.
- Implemented production-style verification via TypeScript checks and build validation.
- Added export automation to reduce manual slide preparation overhead.

## Roadmap

- Add real backend/API data integration.
- Add i18n for multilingual reporting audiences.
- Add route-level code splitting to reduce bundle size.
- Add unit/integration tests (Vitest + React Testing Library).

## License

Released under the MIT License. See [LICENSE](LICENSE).
