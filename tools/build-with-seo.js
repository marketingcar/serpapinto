#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import generateSitemap from './generate-sitemap.js';
import generateRobotsTxt from './generate-robots.js';

const execPromise = promisify(exec);

async function runCommand(command, description) {
  console.log(`\n🔄 ${description}...`);
  try {
    const { stdout, stderr } = await execPromise(command);
    if (stdout) console.log(stdout);
    if (stderr && !stderr.includes('npm warn') && !stderr.includes('deprecated')) {
      console.error(stderr);
    }
    console.log(`✅ ${description} completed`);
    return true;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    return false;
  }
}

async function buildWithSEO() {
  console.log('🚀 Starting SEO-optimized build process...\n');

  // Step 1: Generate llms.txt (already runs as part of build script)
  console.log('📝 llms.txt will be generated as part of the build process');

  // Step 2: Run Vite build
  const buildSuccess = await runCommand('vite build', 'Building application');
  if (!buildSuccess) {
    process.exit(1);
  }

  // Step 3: Generate sitemap
  console.log('\n🗺️  Generating sitemap.xml...');
  await generateSitemap();

  // Step 4: Generate robots.txt
  console.log('\n🤖 Generating robots.txt...');
  await generateRobotsTxt();

  // Step 5: Optimize images in dist folder
  await runCommand(
    'node tools/optimize-images.js',
    'Optimizing images'
  );

  console.log('\n✨ Build completed successfully with all SEO optimizations!\n');
  console.log('Generated files:');
  console.log('  ✓ dist/sitemap.xml');
  console.log('  ✓ dist/robots.txt');
  console.log('  ✓ public/llms.txt');
  console.log('  ✓ Optimized images');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  buildWithSEO().catch((error) => {
    console.error('Build failed:', error);
    process.exit(1);
  });
}

export default buildWithSEO;
