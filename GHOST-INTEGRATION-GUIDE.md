# Ghost CMS Integration Guide

## Quick Start

Your site is now integrated with Ghost CMS at:
**https://serpapinto.marketingcarcontent.com**

## How It Works

### Pages (Ghost Pages Module)

Ghost Pages are pulled from your Ghost CMS and rendered as landing pages on your site.

**How to create a new landing page:**

1. Log into your Ghost Admin at: https://serpapinto.marketingcarcontent.com/ghost
2. Go to "Pages" in the sidebar
3. Click "New page"
4. Write your content using Ghost's editor
5. Set a **slug** (URL) for the page
6. Fill in SEO settings:
   - Meta Title
   - Meta Description
   - Feature Image
   - Open Graph/Twitter card settings
7. Publish the page
8. Rebuild your site with `npm run build`

**Your page will be available at:**
```
https://serpapinto.com/page/your-slug
```

**Example:**
- Ghost slug: `special-offer`
- Website URL: `https://serpapinto.com/page/special-offer`

### Blog (Ghost Posts Module)

Blog posts are pulled from your Ghost CMS posts (NOT pages).

**How to create a new blog post:**

1. Log into your Ghost Admin
2. Go to "Posts" in the sidebar
3. Click "New post"
4. Write your content
5. Set a **slug** (URL) for the post
6. Add tags (will display as categories)
7. Fill in SEO settings
8. Publish the post
9. Rebuild your site with `npm run build`

**Your post will be available at:**
```
https://serpapinto.com/blog/your-slug
```

**The blog listing is available at:**
```
https://serpapinto.com/blog
```

**Example:**
- Ghost slug: `winter-pet-care-tips`
- Website URL: `https://serpapinto.com/blog/winter-pet-care-tips`

## Content Best Practices

### SEO Optimization in Ghost

For each page/post, fill in these fields in Ghost:

1. **Meta Title** (60 characters max)
   - Clear, descriptive title
   - Include primary keyword
   - Example: "Winter Pet Care Tips | Vet Serpa Pinto"

2. **Meta Description** (160 characters max)
   - Compelling description
   - Include call to action
   - Example: "Keep your pets healthy this winter with expert advice from our veterinary team. Learn essential cold weather care tips."

3. **Feature Image**
   - Use high-quality images
   - Recommended size: 1200x630px (for social sharing)
   - Images will be optimized automatically on build

4. **Excerpt** (optional but recommended)
   - Short summary (1-2 sentences)
   - Shows in blog listings

### Content Structure

Use Ghost's editor features:

- **Headings**: Use H2, H3 for structure (H1 is the title)
- **Images**: Add images with alt text
- **Links**: Link to related content
- **Cards**: Use Ghost's content cards (gallery, button, etc.)

## Updating Content

### Option 1: Manual Rebuild (Current Setup)

1. Update content in Ghost CMS
2. Run `npm run build` locally
3. Deploy the new `dist/` folder

### Option 2: Automatic Rebuild (Recommended for Production)

Set up a webhook in Ghost to trigger automatic rebuilds:

1. In Ghost Admin, go to Settings > Integrations > Custom Integration
2. Create a new integration
3. Copy the webhook URL from your hosting provider
4. Set webhook to trigger on "Site changed"
5. Every time you publish/update content, site rebuilds automatically

## Navigation

### Main Navigation (Navbar)
The blog is **hidden from the main navigation** by design. Only these pages appear:
- Home
- Services
- About Us
- Testimonials
- Contact
- FAQ
- Location

### Blog Access
Users can access the blog via:
- Direct URL: `/blog`
- Internal links you create
- Search engines (it's in sitemap)
- Footer links (if added)

### Ghost Pages Access
Ghost pages are accessed via:
- Direct URL: `/page/slug`
- Internal links you create
- Search engines (in sitemap)

## Adding Ghost Pages to Navigation

If you want a Ghost page in the main navigation:

1. Create the page in Ghost with a memorable slug
2. Edit `/src/components/Navbar.jsx`
3. Add to the `navLinks` array:

```javascript
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  // ... existing links
  { path: '/page/your-slug', label: 'Your Page Name' },
];
```

## SEO Features Per Page/Post

Each Ghost page/post automatically includes:

✅ Dynamic page title
✅ Meta description
✅ Open Graph tags (Facebook)
✅ Twitter Card tags
✅ Canonical URL
✅ Feature image (og:image)
✅ Schema.org structured data (for blog posts)
✅ Author information (for blog posts)
✅ Published/updated dates
✅ Reading time (for blog posts)
✅ Tags/categories (for blog posts)

## Troubleshooting

### Content not showing after publish

1. Make sure the content is **Published** (not Draft)
2. Rebuild the site: `npm run build`
3. Check the slug is correct (no special characters)

### Images not displaying

1. Verify the image URL is accessible
2. Check image permissions in Ghost
3. Feature images from Ghost are served from Ghost CDN

### Build errors

1. Check Ghost API credentials in `/src/lib/ghost.js`
2. Verify Ghost site is accessible
3. Check for console errors with `npm run dev`

## Ghost Content API

The integration uses Ghost Content API v5.0.

**API Endpoints Used:**
- `pages.browse()` - Get all pages
- `pages.read()` - Get single page
- `posts.browse()` - Get all posts
- `posts.read()` - Get single post

**API includes:**
- Tags
- Authors
- Metadata

## Performance Notes

- Content is fetched at **build time** (not runtime)
- Each page is pre-rendered as static HTML
- No runtime API calls = Fast page loads
- Images from Ghost are served from Ghost CDN (not optimized locally)
- Consider Ghost's built-in CDN for image optimization

## Content Limits

Current setup fetches **all** pages and posts. If you have 100+ posts:

1. Consider pagination in `/src/pages/BlogPage.jsx`
2. Update `limit: 'all'` to `limit: 20` in Ghost API calls
3. Implement "Load More" functionality

## Future Enhancements

Consider implementing:

1. **Search functionality** for blog posts
2. **Categories/Tags** filtering
3. **Related posts** section
4. **RSS feed** from Ghost
5. **Newsletter signup** integration
6. **Comments** system (Disqus, Ghost native)
7. **Social sharing** buttons

## Support

Ghost CMS Documentation: https://ghost.org/docs/
Ghost Content API: https://ghost.org/docs/content-api/

For site-specific issues, check:
- `/src/lib/ghost.js` - API configuration
- `/src/components/GhostPage.jsx` - Page template
- `/src/components/BlogPost.jsx` - Post template
- `/vite.config.js` - Build configuration
