# SEO-Optimized Ghost CMS Integration

This document describes the comprehensive SEO setup for the Vet Serpa Pinto website with Ghost CMS integration.

## Features Implemented

### 1. Ghost CMS Integration
- **Ghost API Client**: `/src/lib/ghost.js`
- **Ghost URL**: https://serpapinto.marketingcarcontent.com
- Fetches pages and blog posts from Ghost CMS
- Automatic content synchronization on build

### 2. Dynamic Components

#### Landing Pages
- **Component**: `/src/components/GhostPage.jsx`
- Generic template for Ghost Pages
- Route: `/page/:slug`
- Full SEO meta tags support
- Feature image support
- Responsive design

#### Blog System
- **Blog List**: `/src/components/BlogList.jsx` - displays all posts
- **Blog Post**: `/src/components/BlogPost.jsx` - individual post view
- **Blog Page**: `/src/pages/BlogPage.jsx` - main blog listing page
- Route: `/blog` (hidden from main navigation)
- Route: `/blog/:slug` for individual posts
- Reading time estimates
- Author information
- Tags and categories

### 3. Static Site Generation (SSG)
- **Plugin**: `/plugins/vite-plugin-prerender.js`
- Generates separate HTML files for all routes on build
- No single-page application - each page has its own HTML
- Fetches dynamic routes from Ghost API during build
- Configured in `vite.config.js`

**Static Routes Generated:**
- `/` - Home
- `/services` - Services
- `/about` - About Us
- `/testimonials` - Testimonials
- `/contact` - Contact
- `/faq` - FAQ
- `/location` - Location
- `/blog` - Blog listing
- `/page/:slug` - Dynamic Ghost pages
- `/blog/:slug` - Dynamic blog posts

### 4. SEO Files (Auto-Generated on Build)

#### sitemap.xml
- **Script**: `/tools/generate-sitemap.js`
- Auto-generated on every build
- Includes all static and dynamic routes
- Proper priority and changefreq settings
- Last modified dates for dynamic content

#### robots.txt
- **Script**: `/tools/generate-robots.js`
- Auto-generated on every build
- Allows all search engines
- Points to sitemap.xml
- Optimized for crawling

#### llms.txt
- **Script**: `/tools/generate-llms.js`
- Auto-generated on every build
- LLM-friendly site index
- Includes page titles and descriptions

### 5. Image Optimization
- **Script**: `/tools/optimize-images.js`
- Runs on every build
- Uses Sharp for image processing
- Resizes images > 2000px width
- Compresses images > 100KB
- Maintains quality at 85%
- Progressive JPEG encoding
- Supports: JPG, PNG, WebP, GIF

### 6. Comprehensive SEO Best Practices

#### Meta Tags
- Title tags (optimized for each page)
- Meta descriptions
- Keywords
- Canonical URLs
- Open Graph tags (Facebook)
- Twitter Card tags
- Robots directives

#### Structured Data (Schema.org)
- **Component**: `/src/components/SEO.jsx`
- VeterinaryCare schema
- Organization information
- Business hours
- Contact information
- Address
- Aggregate ratings

#### Performance Optimizations
- DNS prefetch for Ghost API
- Preconnect to external domains
- Image lazy loading
- Code splitting
- Minification

#### Accessibility
- Semantic HTML
- ARIA labels where needed
- Alt text for images
- Proper heading hierarchy

## Build Scripts

### Main Build Command
```bash
npm run build
```

This runs the comprehensive SEO-optimized build:
1. Generates llms.txt
2. Builds the application with Vite
3. Generates sitemap.xml
4. Generates robots.txt
5. Optimizes all images in dist folder
6. Prerenders all routes to separate HTML files

### Individual Scripts

```bash
# Generate sitemap only
npm run generate:sitemap

# Generate robots.txt only
npm run generate:robots

# Optimize images only
npm run optimize:images

# Basic build (without SEO enhancements)
npm run build:basic
```

## Development

```bash
npm run dev
```

Runs the development server on port 3000. No static generation in dev mode.

## File Structure

```
/
├── src/
│   ├── components/
│   │   ├── GhostPage.jsx          # Generic Ghost page template
│   │   ├── BlogPost.jsx           # Blog post view
│   │   ├── BlogList.jsx           # Blog listing
│   │   └── SEO.jsx                # SEO component with structured data
│   ├── pages/
│   │   ├── BlogPage.jsx           # Blog listing page
│   │   ├── BlogPostPage.jsx       # Blog post page
│   │   └── DynamicGhostPage.jsx   # Dynamic Ghost page
│   └── lib/
│       └── ghost.js               # Ghost API client
├── tools/
│   ├── build-with-seo.js          # Main build orchestrator
│   ├── generate-sitemap.js        # Sitemap generator
│   ├── generate-robots.js         # Robots.txt generator
│   ├── generate-llms.js           # LLMs.txt generator
│   └── optimize-images.js         # Image optimizer
├── plugins/
│   └── vite-plugin-prerender.js   # Static site generation plugin
└── dist/                          # Build output
    ├── sitemap.xml
    ├── robots.txt
    └── [prerendered HTML files]
```

## Ghost CMS Configuration

**Ghost URL**: https://serpapinto.marketingcarcontent.com
**PUBLIC API Key**: 69442838bbfdab724b782f26:8904896677f0e3496049bd6a1bc47e4778054ad9001c9f8efd5fbab54703eeca

### To Update Ghost Credentials
Edit the following files:
1. `/src/lib/ghost.js`
2. `/vite.config.js`
3. `/tools/generate-sitemap.js`
4. `/tools/generate-static-pages.js`

## SEO Checklist ✅

- ✅ Static HTML pages (not SPA)
- ✅ Unique title tags for each page
- ✅ Meta descriptions for each page
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Structured data (Schema.org)
- ✅ Sitemap.xml (auto-generated)
- ✅ Robots.txt (auto-generated)
- ✅ LLMs.txt (auto-generated)
- ✅ Image optimization
- ✅ Lazy loading images
- ✅ Responsive images
- ✅ Clean URLs
- ✅ Fast page load times
- ✅ Mobile-friendly
- ✅ Semantic HTML
- ✅ HTTPS ready
- ✅ 404 page
- ✅ Proper heading hierarchy

## Navigation

The blog is accessible via direct URL (`/blog`) but is **hidden from the main navigation** as requested. Users can still access it by:
- Direct URL navigation
- Links from other pages
- Search engines (it's in sitemap.xml)

## Notes

- All Ghost content is fetched at build time
- To update content, rebuild the site
- Images from Ghost are not optimized automatically (only local images)
- Consider setting up automatic rebuilds when Ghost content changes (webhooks)

## Deployment

After building, deploy the entire `dist/` folder to your web server. Make sure:
1. Server supports clean URLs (no .html extensions)
2. 404 redirects to index.html for client-side routing
3. HTTPS is enabled
4. Compression (gzip/brotli) is enabled
5. Caching headers are set appropriately

## Future Enhancements

Consider adding:
- Automatic rebuild on Ghost content webhook
- Image CDN for Ghost images
- Progressive Web App (PWA) features
- Advanced analytics integration
- A/B testing capabilities
- Multilingual support
