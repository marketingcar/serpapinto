#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
const MAX_WIDTH = 2000; // Maximum width for images
const QUALITY = 85; // Image quality (1-100)

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  // Skip SVG files as they're already optimized
  if (ext === '.svg') {
    return { skipped: true };
  }

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Check if image needs optimization
    const needsResize = metadata.width > MAX_WIDTH;
    const stats = fs.statSync(filePath);
    const originalSize = stats.size;

    if (needsResize || originalSize > 100000) { // Optimize if > 100KB
      const outputPath = filePath;

      let pipeline = image;

      // Resize if needed
      if (needsResize) {
        pipeline = pipeline.resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside',
        });
      }

      // Optimize based on format
      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: QUALITY, progressive: true });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 });
      } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: QUALITY });
      }

      await pipeline.toFile(outputPath + '.tmp');

      // Replace original with optimized version
      fs.renameSync(outputPath + '.tmp', outputPath);

      const newStats = fs.statSync(filePath);
      const newSize = newStats.size;
      const savedBytes = originalSize - newSize;
      const savedPercent = ((savedBytes / originalSize) * 100).toFixed(1);

      return {
        optimized: true,
        originalSize,
        newSize,
        savedBytes,
        savedPercent,
      };
    }

    return { skipped: true, reason: 'already optimized' };
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
    return { error: error.message };
  }
}

async function findImages(dir) {
  const images = [];

  function scanDirectory(directory) {
    if (!fs.existsSync(directory)) {
      return;
    }

    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (SUPPORTED_FORMATS.includes(ext)) {
          images.push(filePath);
        }
      }
    }
  }

  scanDirectory(dir);
  return images;
}

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  const distDir = path.resolve(__dirname, '../dist');

  if (!fs.existsSync(distDir)) {
    console.log('⚠️  dist directory not found. Skipping image optimization.');
    return;
  }

  const images = await findImages(distDir);

  if (images.length === 0) {
    console.log('No images found to optimize.');
    return;
  }

  console.log(`Found ${images.length} images to process\n`);

  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let optimizedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const imagePath of images) {
    const relativePath = path.relative(distDir, imagePath);
    process.stdout.write(`Processing: ${relativePath}...`);

    const result = await optimizeImage(imagePath);

    if (result.optimized) {
      totalOriginalSize += result.originalSize;
      totalNewSize += result.newSize;
      optimizedCount++;
      console.log(` ✓ Saved ${result.savedPercent}%`);
    } else if (result.skipped) {
      skippedCount++;
      console.log(` ⊘ Skipped`);
    } else if (result.error) {
      errorCount++;
      console.log(` ✗ Error`);
    }
  }

  const totalSaved = totalOriginalSize - totalNewSize;
  const totalSavedPercent = totalOriginalSize > 0
    ? ((totalSaved / totalOriginalSize) * 100).toFixed(1)
    : 0;

  console.log('\n📊 Optimization Summary:');
  console.log(`  ✓ Optimized: ${optimizedCount} images`);
  console.log(`  ⊘ Skipped: ${skippedCount} images`);
  if (errorCount > 0) {
    console.log(`  ✗ Errors: ${errorCount} images`);
  }

  if (totalOriginalSize > 0) {
    console.log(`  💾 Total saved: ${(totalSaved / 1024).toFixed(2)} KB (${totalSavedPercent}%)`);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  optimizeImages().catch((error) => {
    console.error('Image optimization failed:', error);
    process.exit(1);
  });
}

export default optimizeImages;
