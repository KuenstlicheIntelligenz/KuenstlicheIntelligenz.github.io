# CLAUDE.md

## Project Overview

Personal portfolio site "aibab" for an AI engineer. Instagram-style feed with lifestyle content (travel, kitesurfing, videos) alongside technical AI/ML posts. Hosted on GitHub Pages at https://kuenstlicheintelligenz.github.io/.

## Build and Development Commands

```bash
npm run dev       # Local dev server (http://localhost:4321)
npm run build     # Build for production (output: dist/)
npm run preview   # Preview production build locally
```

Deploys automatically via GitHub Actions on push to master.

## Technology Stack

- **Astro 6** - Static site generator (zero JS by default)
- **TypeScript** - Type-safe content collections with Zod schemas
- **Shiki** - Build-time syntax highlighting (dracula theme)
- **CSS** - Plain CSS with custom properties (no SCSS, no Bootstrap, no jQuery)
- **Font Awesome 6.5.1** - Icons (CDN)

### Integrations
- `@astrojs/sitemap` - Sitemap generation
- `@astrojs/rss` - RSS feed
- `reading-time` - Post reading time calculation

## Content Structure

### Collections (src/content/)
All collections use the glob loader, defined in `src/content.config.ts`:

- **posts/** - Technical blog posts (AI/ML, cloud, tutorials)
- **travel/** - Travel gallery posts with photo arrays
- **kitesurf/** - Kitesurfing session posts
- **videos/** - YouTube video posts
- **social/** - Lifestyle/personal moments

### Front Matter Schemas
Defined with Zod in `src/content.config.ts`. Key fields per collection:

**Posts**: title, date, author, summary, categories (comma-separated string), thumbnail (FA icon name or URL), tags, series, minutes
**Travel/Kitesurf/Social**: title, date, location, summary, tags, gallery (image+caption array), thumbnail, featured
**Videos**: title, date, youtube_id, series, duration, thumbnail, tags

## Project Structure

```
src/
├── content.config.ts        # Collection schemas
├── content/                 # Markdown content
│   ├── posts/
│   ├── travel/
│   ├── kitesurf/
│   ├── videos/
│   └── social/
├── layouts/
│   ├── BaseLayout.astro     # Root HTML template
│   ├── PostLayout.astro     # Blog posts (reading time, series nav, MathJax)
│   ├── GalleryLayout.astro  # Photo gallery posts
│   ├── VideoLayout.astro    # YouTube video posts
│   └── PageLayout.astro     # Static pages
├── components/
│   ├── Head.astro           # Meta tags, OG, favicons
│   ├── Header.astro         # Nav + CSS-only mobile menu
│   ├── Footer.astro
│   ├── FeedCard.astro       # Instagram-style card
│   ├── PhotoCarousel.astro  # Vanilla JS carousel
│   ├── YouTubeEmbed.astro   # Responsive iframe
│   ├── SeriesNav.astro      # Multi-part series navigation
│   └── SocialLinks.astro
├── pages/
│   ├── index.astro          # Homepage feed with filtering
│   ├── about.astro
│   ├── search.astro         # Client-side search
│   ├── tech.astro
│   ├── 404.astro
│   ├── feed.xml.ts          # RSS feed
│   ├── posts/               # [slug].astro + index
│   ├── travel/
│   ├── kitesurf/
│   ├── lifestyle/
│   ├── videos/
│   └── categories/
└── styles/
    ├── global.css           # Compiled from legacy SCSS
    ├── modern-ux.css        # CSS custom properties, dark/light theme
    └── instagram-feed.css   # Feed grid, cards, hover effects
```

## Key Features

- **Instagram-style feed** on homepage with content type filtering (vanilla JS)
- **Photo carousel** - Vanilla JS, no dependencies
- **Dark theme** with localStorage persistence
- **MathJax** - Conditional loading for posts with LaTeX
- **Reading time** - Auto-calculated via `reading-time` package
- **Series navigation** - Links related posts/videos via `series` front matter
- **Client-side search** - Searches all collections by title, tags, type

## Design

- Dark theme: `#2D2D29` bg, `#3CA2A2` teal accent
- Card hover: translateY(-6px) + shadow + border glow
- Responsive grid: 3 cols desktop, 2 tablet, 1 mobile
- CSS-only off-canvas mobile menu

## Astro 6 Notes

- Content collections use **glob loader** (not legacy `type: 'content'`)
- Config file is `src/content.config.ts` (not `src/content/config.ts`)
- Collection entries use `post.id` for URLs (not `post.slug`)
- Use `render()` from `astro:content` to get `<Content />` component

## Next Steps
1. Add real photos (via CDN - Cloudflare Images or Cloudinary)
2. Create actual travel/kitesurf/video content
3. Replace placeholder images
4. Optional: Pagefind for full-text search
5. Optional: Comment system, analytics
