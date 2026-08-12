# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/informational website for The Krisar Academy (a school), built with React 19 + Vite, server-rendered and prerendered to static HTML for SEO, with an Express backend that emails contact/admission form submissions.

## Commands

- `npm run dev` — run backend (`server.js` on port 3005) and Vite dev server together (typical local dev command). Vite proxies `/api` to `localhost:3005`.
- `npm run dev:client` — Vite dev server only (no email backend; forms will fail).
- `npm run server` — Express backend only.
- `npm run build` — full production build: client build → SSR build (`src/entry-server.jsx` → `dist/server`) → `npm run prerender`. Always run the full `build` script rather than invoking Vite directly; the prerender step depends on the SSR bundle existing.
- `npm run prerender` — reads `dist/server/entry-server.js`, renders every route from `src/data/routes.js` plus every blog slug from `src/data/blogData.jsx`, and writes static `dist/<route>/index.html` files with SSR'd Helmet head tags injected.
- `npm run sitemap` — regenerates `public/sitemap.xml`, `sitemap-pages.xml`, `sitemap-posts.xml` from the same route/blog-slug sources. Run after adding/removing pages or blog posts, then rebuild.
- `npm run lint` — ESLint over the whole repo.
- `npm run preview` — serve the built `dist/` output locally.

There is no test suite/framework configured in this project.

## Architecture

### Dual server model (local vs. Vercel)

The app deploys to Vercel but is developed against a local Express server — the email-sending logic is **duplicated** in two places and must be kept in sync manually:
- `server.js` — Express app used in local dev (`npm run server`) and it also serves `dist/` statically; has multiple route aliases (`/api/send-email-secure`, `/send-email-secure`, `/api/send-email`, `/send-email`).
- `api/send-email-secure.js` — Vercel serverless function with the same handler logic, used in production.

`vercel.json` rewrites `/send-email-secure` and `/send-email` to `/api/send-email-secure`, and rewrites all non-`/api` paths to `/index.html` (SPA fallback) — but prerendered per-route `index.html` files under `dist/<route>/` take precedence since they exist as static files.

Both email handlers read `type` (`contact` | `admissions` | `admissions_enquiry`) and `data` from the POST body, build an inline-styled HTML email per type, and send via `nodemailer` using `SMTP_*` env vars (see `.env`). Adding a new form type means adding a branch in **both** files.

### SSR + prerendering pipeline

This is a static site generated via SSR-at-build-time (not a running SSR server in production):
1. `src/entry-server.jsx` exports `render(url, context)`, rendering `<App/>` inside `StaticRouter` and capturing `react-helmet-async` head tags.
2. `scripts/prerender.js` runs after the Vite builds, calls `render()` for every route in `src/data/routes.js` plus every blog slug scraped (via regex) from `src/data/blogData.jsx`, and writes the resulting HTML — with Helmet's title/meta/link tags spliced into `<!--app-head-->` — to `dist/<route>/index.html`.
3. In the browser, `src/main.jsx` calls `hydrateRoot` if `#root` already has children (i.e. was prerendered) or `createRoot` otherwise.

`src/data/routes.js` is the single source of truth for static routes and is consumed by three things: `App.jsx`'s `<Routes>` (routes must be added there too — it's not generated from this file), `scripts/prerender.js`, and `scripts/generate-sitemap.js`. When adding a page, update `App.jsx`, `src/data/routes.js`, and re-run `npm run sitemap`.

Per-page SEO (title/description/OG/Twitter tags) is set via the `<SEO>` component (`src/components/common/SEO.jsx`), which wraps `react-helmet-async`'s `<Helmet>`.

### Frontend structure

- `src/pages/` — route-level components, one per entry in `src/data/routes.js` (plus `BlogDetail`, `NotFound`).
- `src/components/layout/` — `Navbar`, `NavbarTop`, `Footer` (rendered once in `App.jsx`, outside `<Routes>`).
- `src/components/sections/<page>/` — page-specific section components (e.g. `sections/home/*` for the homepage, `sections/beyond-academics/*`).
- `src/components/common/` — cross-page utilities: `SEO`, `PageTransition` (wraps every route in `App.jsx` with `framer-motion`'s `AnimatePresence`), `ScrollToTop`, `WhatsAppButton`, `CallButton`, `VirtualTourSection`, `ScrollReveal`.
- `src/components/ui/` — generic UI primitives (`Button`, `ModernCarousel`).
- `src/data/blogData.jsx` — blog post content array (id, slug, images, body); `BlogDetail.jsx`/`Blogs.jsx` read from it directly. Image imports here are also parsed by prerender/sitemap scripts via a `slug:` regex, so slugs must stay as string literals.
- Some newer components use `.tsx` (`CallButton.tsx`, `ScrollToTop.tsx`) though the project is not otherwise typed — there's no `tsconfig.json`; `@types/react*` are present only for editor intellisense.

### Styling

Tailwind CSS v4 via `@tailwindcss/vite` (no PostCSS config). Brand colors are defined in `tailwind.config.js` under `theme.extend.colors.brand` (`primary`, `secondary`, `accent`) and `text` — prefer these tokens (`bg-brand-primary`, `text-brand-secondary`, etc.) over raw hex values in new components.

### Assets

`src/assets/images/` is organized by page/section (e.g. `home/banner/desktop`, `gallery`, `blog`). Images are imported directly into components (bundled by Vite), not referenced by public URL, except for a few files in `public/` (favicon, OG image, sitemap XML/XSL).
