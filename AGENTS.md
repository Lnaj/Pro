# AGENTS.md

## Runtime + Tooling
- Next.js app router project (Next `16.2.x`) with React `19`, TypeScript, Tailwind CSS `4`, and Material Tailwind.
- NPM is the active package manager (`package-lock.json` exists; no pnpm/yarn lockfile).
- Path alias is configured as `@/* -> ./src/*` in `tsconfig.json`.

## High-value Commands
- Install: `npm ci` (matches CI) or `npm install`.
- Dev server: `npm run dev`.
- Lint: `npm run lint` (ESLint 9 flat config via `eslint.config.mjs`).
- Production build check: `npm run build`.
- Start built app: `npm run start`.

## Codebase Shape
- Main route entrypoint is `src/app/page.tsx`.
- Root app shell + metadata are in `src/app/layout.tsx`; global styles are in `src/app/globals.css`.
- Reusable UI components live in `src/components/*` and are re-exported through `src/components/index.ts`.
- Large resume content blocks are hardcoded in `src/app/information-section.tsx` arrays (`EDUCATION`, `EXPERIENCE`, `SKILLS`, `LANGUAGES`).

## Repo-specific Gotchas
- `src/components/index.ts` has a top-level `"use client"`; anything imported from this barrel is a client component boundary. Import directly from file paths if you need a server-only component.
- Tailwind v4 uses PostCSS plugin `@tailwindcss/postcss` in `postcss.config.js`; global stylesheet entry is `@import "tailwindcss"` in `src/app/globals.css`.
- Material Tailwind theme extension still comes from `withMT(...)` in `tailwind.config.ts` (notably `blue-gray` color utilities used across components).
- `next.config.js` only allows remote images from `www.material-tailwind.com`; add domains explicitly if new external image hosts are introduced.
- There is no test suite configured in this repo right now; verification is lint + build.

## CI / Deployment Notes
- GitHub Actions workflow is `.github/workflows/nextjs.yml` and triggers on pushes to `live-demo`.
- Workflow runs install + `next build`, then uploads `./out` as Pages artifact; if deployment work is touched, confirm static export behavior is still consistent with this workflow.
