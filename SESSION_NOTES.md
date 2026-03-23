# Session Notes: Jekyll to Astro Migration

**Date**: 2026-03-23
**Branch**: `astro-migration`

## What We Did

### 1. Evaluated Jekyll vs Modern Alternatives
- Discussed pain points with Jekyll (Ruby dependency hell, stalled development, limited plugins on GitHub Pages)
- Compared Astro, Hugo, and 11ty
- Chose **Astro** for: zero-JS-by-default, island architecture, built-in image optimization, type-safe content collections, fast Vite-based dev server

### 2. Planned the Migration
- Explored entire Jekyll codebase: 7 layouts, 7 includes, 5 CSS files, 5 JS files, 29 content files, 12 pages
- Mapped all interactive features to Astro equivalents
- Key decisions:
  - **Vanilla JS only** (no React/Svelte) for 4 small interactive islands
  - **Drop Bootstrap** — replaced with CSS Grid (3 lines)
  - **Drop jQuery + mmenu** — replaced with CSS-only off-canvas menu (~40 lines)
  - **Drop HighlightJS CDN** — Shiki built into Astro (build-time highlighting)
  - **Drop service worker** — caused stale content, not worth it
  - **Compile SCSS once** to plain CSS, use CSS custom properties going forward

### 3. Implemented the Migration

**Scaffolding:**
- Created Astro 6 project with `astro.config.mjs`, `tsconfig.json`
- Installed 5 dependencies: astro, @astrojs/sitemap, @astrojs/rss, reading-time
- Set up GitHub Actions deploy workflow (`.github/workflows/deploy.yml`)

**Content Collections (Astro 6 glob loader):**
- Defined Zod schemas in `src/content.config.ts` for: posts, travel, kitesurf, videos, social
- Migrated 29 markdown files, stripped `layout:` fields, renamed undated files with date prefixes
- Removed duplicate Asia-Vacation post (already in travel collection)

**Styles:**
- Compiled `style.scss` → `global.css` via sass
- Copied `modern-ux.css` and `instagram-feed.css` as-is
- Dropped: Bootstrap CSS, jQuery mmenu CSS, HighlightJS theme CSS

**Layouts & Components (all in `src/`):**
- `BaseLayout.astro` — HTML skeleton, global CSS imports, dark mode script
- `PostLayout.astro` — reading time, series nav, MathJax (conditional), tags
- `GalleryLayout.astro` — photo carousel, location metadata
- `VideoLayout.astro` — YouTube embed, series nav
- `PageLayout.astro` — simple wrapper
- `Header.astro` — CSS-only mobile off-canvas menu (replaced jQuery mmenu)
- `Footer.astro`, `Head.astro`, `SocialLinks.astro`
- `FeedCard.astro` — Instagram-style card component
- `PhotoCarousel.astro` — vanilla JS carousel (replaced Bootstrap carousel)
- `YouTubeEmbed.astro` — responsive iframe
- `SeriesNav.astro` — multi-part content linking

**Pages:**
- `index.astro` — homepage with feed grid + filter buttons (inline JS)
- Section pages: tech, travel, kitesurf, lifestyle, videos
- Archive: `posts/index.astro`
- Dynamic routes: `[slug].astro` for each collection
- `categories/[...category].astro` — auto-generated from post categories
- `search.astro` — client-side search across all collections
- `feed.xml.ts` — RSS feed via @astrojs/rss
- `404.astro`, `about.astro`

**Cleanup:**
- Removed all Jekyll files: `_config.yml`, `Gemfile`, `Makefile`, `_layouts/`, `_includes/`, `_posts/`, `_site/`, etc.
- Removed old JS/CSS: jQuery, mmenu, HighlightJS, Bootstrap, feed-filter, lazy-load, enhanced-ux
- Updated `.gitignore` for Astro (dist/, node_modules/, .astro/)
- Updated `CLAUDE.md` with new project documentation

### 4. Astro 6 Gotchas Encountered
- Config file must be `src/content.config.ts` (not `src/content/config.ts`) — legacy path throws error
- Collections need `glob()` loader (not `type: 'content'`)
- Use `post.id` for URLs (not `post.slug`) with glob loader
- `[...slug].astro` catch-all routes conflict with `index.astro` — use `[slug].astro` instead

## Build Result
- **42 pages** generated
- **1.36s** build time
- **5 npm dependencies** (was: entire Ruby/gem ecosystem)
- Zero JS shipped by default (only on pages with carousel/filter/search)

## What's Next
- Test visually in browser (`npm run dev`)
- Fix any CSS discrepancies from Bootstrap removal
- Change GitHub Pages source to "GitHub Actions" in repo settings
- Merge to master and deploy
- Add real content (photos, videos, posts)
- Optional: Add Pagefind for full-text search
