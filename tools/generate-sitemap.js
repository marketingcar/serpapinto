import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import GhostContentAPI from '@tryghost/content-api';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Ghost API
const ghostAPI = new GhostContentAPI({
  url: 'https://serpapinto.marketingcarcontent.com',
  key: '69442838bbfdab724b782f26:8904896677f0e3496049bd6a1bc47e4778054ad9001c9f8efd5fbab54703eeca',
  version: 'v5.0'
});

async function generateSitemap() {
  try {
    console.log('Generating sitemap.xml...');

    // Your website URL
    const hostname = 'https://serpapinto.com';

    // Fetch Ghost content
    const pages = await ghostAPI.pages.browse({ limit: 'all' });
    const posts = await ghostAPI.posts.browse({ limit: 'all' });

    // Define static routes
    const staticRoutes = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/services', changefreq: 'weekly', priority: 0.9 },
      { url: '/about', changefreq: 'monthly', priority: 0.8 },
      { url: '/testimonials', changefreq: 'weekly', priority: 0.7 },
      { url: '/contact', changefreq: 'monthly', priority: 0.8 },
      { url: '/faq', changefreq: 'monthly', priority: 0.7 },
      { url: '/location', changefreq: 'monthly', priority: 0.7 },
      { url: '/blog', changefreq: 'daily', priority: 0.9 },
    ];

    // Add Ghost pages
    const ghostPages = pages.map((page) => ({
      url: `/page/${page.slug}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: page.updated_at,
    }));

    // Add blog posts
    const blogPosts = posts.map((post) => ({
      url: `/blog/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: post.updated_at,
    }));

    // Combine all routes
    const links = [...staticRoutes, ...ghostPages, ...blogPosts];

    // Create a stream to write to
    const stream = new SitemapStream({ hostname });

    // Return a promise that resolves with the sitemap XML
    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
      data.toString()
    );

    // Write sitemap to dist/public folder
    const sitemapPath = path.resolve(__dirname, '../dist/sitemap.xml');
    fs.mkdirSync(path.dirname(sitemapPath), { recursive: true });
    fs.writeFileSync(sitemapPath, xml);

    // Also write to public folder for dev
    const publicSitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
    fs.mkdirSync(path.dirname(publicSitemapPath), { recursive: true });
    fs.writeFileSync(publicSitemapPath, xml);

    console.log(`Sitemap generated successfully with ${links.length} URLs`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

export default generateSitemap;

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateSitemap();
}
