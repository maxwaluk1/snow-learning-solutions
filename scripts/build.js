#!/usr/bin/env node

/**
 * Snow Learning Solutions - Build & Deployment Script
 * This script prepares the project for production
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Snow Learning Solutions - Build Script');
console.log('=========================================\n');

// Check for required files
const requiredFiles = [
  'package.json',
  'tsconfig.json',
  'tailwind.config.ts',
  'next.config.js',
];

console.log('Checking required files...');
let allFilesPresent = true;

requiredFiles.forEach((file) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesPresent = false;
  }
});

if (!allFilesPresent) {
  console.log('\n⚠️  Some required files are missing. Please check your setup.');
  process.exit(1);
}

console.log('\n✅ All required files present!');
console.log('\nReady to build. Run: npm run build\n');
