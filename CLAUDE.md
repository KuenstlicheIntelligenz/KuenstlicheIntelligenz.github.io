# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal portfolio site called "aibab" - a digital business card and professional presence for an AI engineer. The site features technical blog posts on AI/ML research, tutorials, project showcases, and professional expertise. Hosted on GitHub Pages at https://kuenstlicheintelligenz.github.io/.

## Build and Development Commands

```bash
# Install Ruby dependencies (uses rbenv)
make install

# Run local development server (http://localhost:4000)
make serve

# Build site for production
make build

# Clean build artifacts and cache
make clean

# Build and prepare for deployment
make deploy
```

**Note**: All commands use `eval "$(rbenv init - zsh)"` to initialize rbenv. The site automatically deploys via GitHub Pages on push to master.

## Technology Stack

- **Jekyll 4.3.0** - Static site generator
- **Ruby** with rbenv for version management
- **Kramdown** with GFM input and Rouge syntax highlighting
- **SCSS** - Primary styling (css/style.scss)
- **CSS Custom Properties** - Modern theming (css/modern-ux.css)

### Jekyll Plugins
- jekyll-feed - RSS feed generation
- jekyll-paginate - Post pagination (5 per page)
- jekyll-sitemap - Sitemap generation
- jekyll-archives - Category/tag archive pages
- jekyll-minifier - HTML/CSS/JS minification

## Content Structure

### Posts
- Location: `_posts/`
- Naming: `YYYY-MM-DD-Title.md` (dated) or `Title.md` (undated)
- Front matter fields:
  - `layout: post` (auto-applied via defaults)
  - `title:` - Post title
  - `date:` - Publication date (YYYY-MM-DD HH:MM:SS)
  - `author:` - Author name
  - `summary:` - Brief description
  - `categories:` - Categories (comma-separated)
  - `thumbnail:` - FontAwesome icon name or custom thumbnail
  - `tags:` - Array of tags
  - `series:` (optional) - Series name for multi-part posts

### Categories
Main categories: Deep Learning, Machine Learning, Tools, Research, Cloud, Thoughts, Tutorials

Category pages are auto-generated in `/categories/` via jekyll-archives.

### Drafts
Location: `_drafts/` - Not published but available for local preview with `--drafts` flag.

### Special Collections
- `_social/` - Social/personal content (separate from main posts)

## Styling Architecture

The site uses a dual-styling approach:

1. **Legacy SCSS** (css/style.scss)
   - SCSS variables for colors ($darker, $dark-blue, $matrix-green, etc.)
   - Main structural styles

2. **Modern CSS** (css/modern-ux.css)
   - CSS custom properties (--bg-primary, --text-accent, etc.)
   - Dark theme by default, optional light theme via `[data-theme="light"]`
   - Modern UX components

When modifying styles, maintain both for compatibility.

## Layout Hierarchy

- `default.html` - Base template (includes head, header, content, footer)
- `post.html` - Blog post layout (extends default)
  - Includes reading time calculation (180 words/min)
  - Series navigation support
  - MathJax for equations
  - Related posts section
- `page.html` - Static pages
- `archive.html` - Archive/category pages
- `none.html` - Minimal layout

## Key Features

### MathJax Support
Posts automatically include MathJax (_includes/mathjax.html) for rendering LaTeX equations.

### Reading Time
Auto-calculated based on word count (180 words/min) unless `minutes:` specified in front matter.

### Series Posts
Use `series: "Series Name"` in front matter to link related posts with navigation.

### Search
Client-side search powered by Simple Jekyll Search (search.json + js/jekyll-search.js).

## Configuration Notes

- **Timezone**: Europe/Berlin
- **Permalink style**: pretty URLs (no .html extension)
- **Pagination**: 5 posts per page
- **Feed**: 20 posts max, full content (not excerpts)
- **Build**: Incremental builds disabled, future posts enabled

## Assets and Libraries

### JavaScript
- jQuery
- MMenu (responsive menu)
- HighlightJS (code syntax highlighting)
- Simple Jekyll Search
- enhanced-ux.js (custom enhancements)

### CSS Frameworks
- Bootstrap (grid and utilities)
- Font Awesome (icons)

## Site Identity

Purpose: Personal business card and portfolio for AI engineer
Tagline: "AI Engineer | ML Specialist | Technology Innovator"
Focus: Professional showcase of expertise in AI/ML, deep learning, cloud infrastructure, and software engineering
Color palette: Dark theme with "hacker aesthetic" accents (matrix green, cyber blue, neon pink, terminal amber)

---

## Recent Updates: Instagram-Style Transformation (December 2024)

### Overview
Transformed the homepage into an Instagram-style feed showcasing lifestyle content (travel, kitesurfing, videos) alongside technical posts. The design prioritizes visual content with a modern, card-based layout.

### New Collections Added
Created four new Jekyll collections in `_config.yml`:
- `_travel/` - Travel posts with photo galleries
- `_kitesurf/` - Kitesurfing session posts
- `_videos/` - Video content with YouTube embeds
- `_social/` - Lifestyle/personal moments

All collections configured with `output: true` and custom permalinks.

### New Layouts
1. **`_layouts/gallery-post.html`** - Photo gallery posts with carousel
   - Front matter: `photos`, `location`, `thumbnail`
   - Supports photo arrays with captions

2. **`_layouts/video-post.html`** - YouTube video posts
   - Front matter: `youtube_id`, `duration`, `series`
   - Responsive 16:9 embed

### New Components
1. **`_includes/photo-carousel.html`** - Interactive photo carousel with controls
2. **`_includes/youtube-embed.html`** - Responsive video embedding

### Homepage Redesign (`index.html`)

**Current Structure:**
1. Hero section (aibab branding + tagline)
2. Content filter buttons (All, Kitesurf, Travel, Lifestyle, Videos, Tech)
3. Instagram-style feed grid (aggregates all collections)

**Feed Card Layout:**
Each card displays in this order:
1. Title (headline)
2. Date and location metadata
3. Featured image
4. Excerpt (15 words max, 2 lines)
5. Tags (with # prefix, compact spacing)

**Key Features:**
- No overlay on images (clean, minimal)
- No type icons (removed for cleaner look)
- Unified feed aggregating all content types
- Client-side filtering via JavaScript
- Responsive grid: 3 cols desktop, 2 tablet, 1 mobile

### Styling Updates

**`css/instagram-feed.css`** - New dedicated stylesheet:
- Modern card design with subtle borders (rgba teal)
- Hover effects: lift + shadow + border glow
- Image aspect ratio: 85% (between square and 4:3)
- Compact tag styling with minimal spacing
- Responsive grid layout

**Key Style Decisions:**
- Card background: `#2D2D29`
- Border: `rgba(60, 162, 162, 0.2)`
- Text colors: White titles, `#D0D0D0` excerpts, `#999` meta
- Tag spacing: `0.3rem` gap, minimal padding
- Tag style: Semi-transparent teal background
- Border radius: 16px cards, 10px tags

**`css/style.scss` Updates:**
- Modified `.index .row` spacing (first row only gets top margin)
- Maintained dark theme compatibility

### JavaScript Enhancements

**`js/feed-filter.js`** - Client-side content filtering:
- Filters cards by data-type attribute
- Smooth fade transitions
- Shows empty state when no matches
- Works without page reload

**`js/lazy-load.js`** - Image lazy loading:
- Uses Intersection Observer API
- Includes carousel controls
- Improves initial page load performance

### Updated Navigation
**`_includes/header.html`**:
- Added Lifestyle dropdown (Kitesurf, Travel, Social)
- Added Videos link
- Reorganized Tech categories
- All linked to new section landing pages

### Section Landing Pages
Created dedicated pages:
- `pages/kitesurf.html`
- `pages/travel.html`
- `pages/lifestyle.html`
- `pages/videos.html`
- `pages/tech.html`

Each uses consistent styling and layout patterns.

### Search Integration
Updated `search.json` to include all new collections:
- Travel posts searchable by title, location, tags
- Kitesurf sessions searchable
- Video content indexed
- Type field added for filtering

### Content Migration
- Migrated `_posts/Asia-Vacation.md` → `_travel/2019-12-25-asia-experience.md`
- Updated to use gallery-post layout
- Added photo array placeholders

### Placeholder Strategy
Using `https://via.placeholder.com/400x400/3CA2A2/FFFFFF?text={type}` for development:
- Allows testing layout without real images
- Real photos to be added via CDN later (Cloudflare Images, Cloudinary, etc.)
- Keeps GitHub repo lightweight

### Current Status: Ready for Content

**What's Complete:**
✅ All infrastructure and layouts
✅ Feed card design finalized
✅ Filtering and navigation working
✅ Responsive design tested
✅ Search integration
✅ Dark theme maintained

**Next Steps:**
1. Add real photos to collections (via CDN)
2. Create actual travel/kitesurf/video posts
3. Replace placeholder images with real content
4. Optional: Add comment system (utterances/Disqus)
5. Optional: Analytics integration

### Design Philosophy
The Instagram transformation maintains the site's technical, hacker aesthetic while making it more visual and personal. The dark theme with teal accents carries through, but the layout is now more modern, card-based, and Instagram-inspired.

### Performance Considerations
- Lazy loading for images
- Deferred JavaScript
- Minimal inline styles (all in external CSS)
- Client-side filtering (no server calls)
- Optimized for GitHub Pages compatibility
- No custom Ruby plugins required
