const fs = require('fs-extra');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');

async function build() {
  try {
    // Remove the dist folder if it exists
    await fs.remove(distDir);
    // Copy everything from src to dist
    await fs.copy(srcDir, distDir);
    console.log('Build completed successfully!');
  } catch (err) {
    console.error('Build failed:', err);
    process.exit(1);
  }
}

build();