# Repository Guidelines

## Project Structure & Module Organization
- `src/app/`: Next.js App Router routes (`page.tsx`, `layout.tsx`, error/loading, route groups).
- `src/components/`: Reusable components; UI primitives in `src/components/ui/`.
- `src/content/posts/`: MDX blog posts with frontmatter.
- `src/lib/`: Utilities and helpers.
- `src/styles/`: Global styles (Tailwind).
- `public/`: Static assets (icons, images, `robots.txt`).

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server (Turbopack) at `http://localhost:3000`.
- `npm run build`: Production build via Next.js.
- `npm start`: Start the production server (after build).
- `npm run lint`: Run ESLint (Next + TypeScript rules).

## Coding Style & Naming Conventions
- **Language**: TypeScript, React 19, Next.js 15 (App Router).
- **Imports**: Use path alias `@/*` (configured in `tsconfig.json`).
- **Components**: PascalCase filenames (e.g., `HeroSection.tsx`, `Logo.tsx`). Server/client components per Next.js defaults.
- **Utilities**: CamelCase functions in `src/lib/`.
- **Styling**: Tailwind CSS; prefer utility classes over custom CSS. Keep class strings readable and grouped by purpose.
- **Linting**: ESLint (flat config) with `next/core-web-vitals` and `next/typescript`. Fix warnings before pushing.

## Testing Guidelines
- No automated test framework is configured. For changes that affect routing, rendering, or content parsing:
  - Provide a brief manual test plan in the PR (steps + expected results).
  - Ensure `npm run lint` passes and pages load without errors (`/`, `/about`, `/projects`, `/blog`).
  - If you add a test setup (e.g., Playwright or Vitest), scope it to your feature and document commands.

## Commit & Pull Request Guidelines
- **Commits**: Clear, imperative subject (e.g., "Add HeroSection CTA animation"). Group related changes; avoid noisy refactors.
- **Conventional Commits**: Recommended (e.g., `feat:`, `fix:`, `docs:`) but not required.
- **PRs**: Include purpose, screenshots of UI changes, linked issues, and a manual test plan. Keep diffs focused; note any follow-ups.

## Security & Configuration Tips
- Use `.env.local` for secrets (not committed). Access via `process.env`.
- Static assets go in `public/`; content lives in `src/content/posts/` with MDX frontmatter.
