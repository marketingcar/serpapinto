import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function vitePluginPrerender(options = {}) {
  const { routes = [], generateRoutes = null } = options;

  return {
    name: 'vite-plugin-prerender',
    apply: 'build',

    async closeBundle() {
      console.log('\n🔨 Starting prerendering...');

      let routesToRender = routes;

      // If generateRoutes function is provided, use it to get dynamic routes
      if (typeof generateRoutes === 'function') {
        try {
          const dynamicRoutes = await generateRoutes();
          routesToRender = [...routes, ...dynamicRoutes];
        } catch (error) {
          console.error('Error generating routes:', error);
        }
      }

      if (routesToRender.length === 0) {
        console.log('⚠️  No routes to prerender');
        return;
      }

      console.log(`📄 Prerendering ${routesToRender.length} routes...`);

      const distPath = path.resolve(process.cwd(), 'dist');
      const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

      for (const route of routesToRender) {
        try {
          // Skip root as it's already created
          if (route === '/') continue;

          // Create directory structure
          const routePath = route.replace(/^\//, '').replace(/\/$/, '');
          const routeDir = path.join(distPath, routePath);

          fs.mkdirSync(routeDir, { recursive: true });

          // Copy index.html to route directory
          const routeHtmlPath = path.join(routeDir, 'index.html');
          fs.writeFileSync(routeHtmlPath, indexHtml);

          console.log(`  ✓ ${route}`);
        } catch (error) {
          console.error(`  ✗ Error prerendering ${route}:`, error.message);
        }
      }

      console.log('✨ Prerendering completed!\n');
    },
  };
}
