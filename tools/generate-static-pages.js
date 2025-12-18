import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import GhostContentAPI from '@tryghost/content-api';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Ghost API
const ghostAPI = new GhostContentAPI({
  url: 'https://serpapinto.marketingcarcontent.com',
  key: '69442838bbfdab724b782f26:8904896677f0e3496049bd6a1bc47e4778054ad9001c9f8efd5fbab54703eeca',
  version: 'v5.0'
});

async function generateStaticPages() {
  try {
    console.log('Fetching Ghost pages and posts...');

    // Fetch all pages and posts
    const pages = await ghostAPI.pages.browse({ limit: 'all' });
    const posts = await ghostAPI.posts.browse({ limit: 'all' });

    console.log(`Found ${pages.length} pages and ${posts.length} posts`);

    // Create routes configuration
    const routes = [
      '/',
      '/services',
      '/about',
      '/testimonials',
      '/contact',
      '/faq',
      '/location',
      '/blog',
    ];

    // Add dynamic Ghost pages
    pages.forEach((page) => {
      routes.push(`/page/${page.slug}`);
    });

    // Add blog posts
    posts.forEach((post) => {
      routes.push(`/blog/${post.slug}`);
    });

    // Save routes to a file for the prerender plugin
    const routesFile = path.resolve(__dirname, '../dist/routes.json');
    fs.mkdirSync(path.dirname(routesFile), { recursive: true });
    fs.writeFileSync(routesFile, JSON.stringify(routes, null, 2));

    console.log(`Generated ${routes.length} routes for static site generation`);
    return routes;
  } catch (error) {
    console.error('Error generating static pages:', error);
    return [];
  }
}

export default generateStaticPages;

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateStaticPages();
}
