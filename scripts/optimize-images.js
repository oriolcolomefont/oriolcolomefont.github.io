#!/usr/bin/env node

/**
 * Image Optimization Script
 * Compresses images in the assets/images directory
 * Generates WebP versions for modern browsers
 */

const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = './assets/images';
const OUTPUT_DIR = './assets/images/optimized';

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  try {
    // Optimize JPEG and PNG images
    const files = await imagemin([`${INPUT_DIR}/*.{jpg,jpeg,png}`], {
      destination: OUTPUT_DIR,
      plugins: [
        imageminMozjpeg({ quality: 85 }),
        imageminPngquant({ quality: [0.8, 0.9] })
      ]
    });

    console.log(`✅ Optimized ${files.length} images`);

    // Generate WebP versions
    const webpFiles = await imagemin([`${INPUT_DIR}/*.{jpg,jpeg,png}`], {
      destination: OUTPUT_DIR,
      plugins: [
        imageminWebp({ quality: 85 })
      ]
    });

    console.log(`✅ Generated ${webpFiles.length} WebP versions`);
    console.log('🎉 Image optimization complete!');

  } catch (error) {
    console.error('❌ Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();

