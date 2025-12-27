# Kasparro — AI-native SEO & Brand Intelligence (Mocked Frontend)

This repository is a focused, production-minded frontend demo for Kasparro — an AI-native SEO and Brand Intelligence platform. It uses Next.js (App Router), TypeScript, Tailwind CSS styles (utility classes used — tailwindcss/postcss/autoprefixer are included in devDependencies), Zustand for minimal state, and mocked JSON as the single source of truth for UI content.

## What you'll find

- `app/` — Next.js App Router routes. Public pages at `/`, `/platform`, `/about`. Product area under `/app/*` with nested layout for `/app/dashboard`, `/app/audit`, `/app/architecture`.
- `src/components/` — UI primitives (`ui/`), layout (`layout/`), and feature components (`features/`) split by domain (dashboard, audit).
 - `src/data/` — All copy and mocked datasets as JSON: `brands.json`, `audits.json`, `copy.json` (no hardcoded UI text in JSX).
 - `tests/` — Basic unit tests using Jest + React Testing Library (foundation for further coverage).
- `src/types/` — TypeScript interfaces modeling Brand, AuditModule, AuditInsight, AuditIssue, AuditRecommendation, AuditScore, and report shapes.
- `src/state/` — `useBrandStore.ts` (Zustand) holding selected brand and module plus derived current report/module.
- `src/hooks/useMockData.ts` — Tiny typed accessors over JSON data.

## Architectural decisions (concise)

- Single source of truth: All UI copy and data come from `src/data/*.json`. This enforces that UI is data-driven and simplifies later swapping to an API.
- Strong typing: `src/types/index.ts` defines interfaces for all domain objects. UI components accept typed props only.
- Component boundaries: Small primitives in `src/components/ui` (Button, Card, Typography) used by feature components in `src/components/features` to keep pages compact and testable.
- App Router structure: Public pages live at top-level `app/` routes; product area uses a nested `app/app/layout.tsx` to provide the product shell (sidebar + main panel).

## State management

- Zustand chosen for minimal, predictable global state: only a few selections (selectedBrandId, selectedModuleKey). It avoids Context re-render pitfalls and scales easily if you later add persistence or middleware.
- The store is seeded from `src/data/*` on startup and exposes actions `setSelectedBrand` and `setSelectedModule`. UI components subscribe to minimal slices of the store to reduce re-renders.

Why not Context? For this demo the global state shape is small but frequently read by many components (sidebar, header, module detail). Zustand provides simpler selectors and better ergonomics.

## Data modeling notes

- Each `AuditModule` includes `score`, `insights[]`, `issues[]`, `recommendations[]`. This supports a single detailed view per module and aligns with a prioritized remediation workflow.
- Scores use a lightweight `AuditScore` type with numeric `value`, `grade`, and `trend`.
- All copy and numeric values are mocked in JSON so pages can be rendered without a backend.

## How to run (local)

Requirements: Node 18+ and npm.

1. Install dependencies
```bash
npm install
```
2. Start dev server
```bash
npm run dev
```
Open http://localhost:3000

Notes: Tailwind devDependencies (`tailwindcss`, `postcss`, `autoprefixer`) are included in devDependencies so the project builds on Vercel or locally after `npm install`. Basic unit tests were added (run with `npm test`) as a starting point rather than full coverage.

## Tradeoffs and shortcuts

- Tailwind devDependencies were not strictly pinned in this demo; if you want full Tailwind processing ensure `tailwindcss`, `postcss`, and `autoprefixer` are installed.
- No backend: all data is mocked. This simplifies the demo and keeps focus on UI/UX and data modeling, but real integrations (Search Console, analytics) will be required in production.
- Minimal styling: Prioritized clarity and component structure over visual polish or animations.

## Next steps / suggestions

- Add unit tests for critical components (ModuleDetail, ModuleList, SnapshotGrid).
- Add Storybook for primitives to document usage and variants.
- Integrate Tailwind fully (install devDeps) and add a design tokens layer.

---
Engineer-to-engineer: this repo intentionally focuses on architecture, typing, and explicit data flow. If you'd like, I can add tests, Storybook setup, or a small script to export reports from the mocked JSON into CSVs for downstream analysis.
