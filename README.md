# Serpa Pinto — Website

A Vite + React static website integrated with Ghost (content API), built with Tailwind CSS and a small set of build tools for SEO, sitemap/robots generation and image optimization.

**Quick overview**
- **Tech:** Vite, React, Tailwind CSS, Ghost Content API
- **Purpose:** Static site / blog with Ghost as CMS and build-time SEO enhancements

**Repository layout (important paths)**
- `src/` — React app source (pages, components, styles)
- `public/` — static assets
- `plugins/`, `visual-editor/`, `utils/` — custom Vite plugins and helper scripts
- `tools/` — utility scripts used in the build (sitemap, robots, image optimizer, SEO builder)

**Prerequisites**
- Node.js 18+ (LTS recommended)
- npm (or pnpm/yarn, examples below use `npm`)

Getting started (development)

1. Clone the repo

```bash
git clone https://github.com/marketingcar/serpapinto.git
cd serpapinto
```

2. Install dependencies

```bash
npm install
```

3. Run development server (Vite)

```bash
npm run dev
```

The dev server runs on port 3000 by default (`--port 3000`).

Build & preview

- Build (production, includes SEO build step):

```bash
npm run build
```

- Build (basic Vite build without the SEO step):

```bash
npm run build:basic
```

- Preview production build locally:

```bash
npm run preview
```

Helpful maintenance scripts

- Generate sitemap (writes to `public` or output configured in script):

```bash
npm run generate:sitemap
```

- Generate `robots.txt`:

```bash
npm run generate:robots
```

- Optimize images (uses `sharp` and scripts in `tools/`):

```bash
npm run optimize:images
```

Environment / Ghost integration

- The site uses the Ghost Content API for fetching posts and pages at runtime/build-time. Provide the following environment variables when needed by the build or local preview:
	- `GHOST_API_URL` — URL of your Ghost instance (e.g. `https://your-ghost-site.com`)
	- `GHOST_CONTENT_API_KEY` — content API key for read-only access

Edit content and layout

- Page components live in `src/pages/`.
- Reusable UI components are in `src/components/`.
- Tailwind config is in `tailwind.config.js` and global styles in `src/index.css`.

Deployment

This is a static site output that can be deployed to Vercel, Netlify, GitHub Pages (static export), or any static hosting provider. Typical steps for Vercel/Netlify:

- Build command: `npm run build`
- Publish directory: the directory created by the build step (default Vite output is `dist`, unless changed by the build scripts)

Notes & tips

- The `build` script runs `tools/build-with-seo.js` which can perform extra HTML generation/SEO work — check that script if you need to change SEO behavior.
- The `tools/` folder also contains helper scripts used by the repo: `generate-sitemap.js`, `generate-robots.js`, `optimize-images.js`, and some custom generators.
- If you see issues related to images, ensure `sharp` is installed correctly for your OS — on Apple Silicon you may need to rebuild or install using the appropriate binary.

Contributing

- Open issues and PRs are welcome. Keep changes focused and include a short description of what you changed.

