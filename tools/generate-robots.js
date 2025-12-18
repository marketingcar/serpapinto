import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateRobotsTxt() {
  try {
    console.log('Generating robots.txt...');

    const hostname = 'https://serpapinto.com';

    const robotsTxt = `# robots.txt for ${hostname}
User-agent: *
Allow: /

# Sitemap
Sitemap: ${hostname}/sitemap.xml

# Disallow specific paths (if any)
# Disallow: /admin/
# Disallow: /private/

# Crawl-delay (optional, uncomment if needed)
# Crawl-delay: 1

# Allow all bots to crawl
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

User-agent: facebot
Allow: /

User-agent: ia_archiver
Allow: /
`;

    // Write to dist folder
    const distPath = path.resolve(__dirname, '../dist/robots.txt');
    fs.mkdirSync(path.dirname(distPath), { recursive: true });
    fs.writeFileSync(distPath, robotsTxt);

    // Also write to public folder for dev
    const publicPath = path.resolve(__dirname, '../public/robots.txt');
    fs.mkdirSync(path.dirname(publicPath), { recursive: true });
    fs.writeFileSync(publicPath, robotsTxt);

    console.log('robots.txt generated successfully');
  } catch (error) {
    console.error('Error generating robots.txt:', error);
  }
}

export default generateRobotsTxt;

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateRobotsTxt();
}
