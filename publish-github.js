#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Publishing to GitHub Packages...\n');

// Lista de pacotes para publicar
const packages = [
  { name: 'angular-regular', sourcePath: 'packages/angular-regular', distPath: 'dist/angular-regular-icons' },
  { name: 'angular-solid', sourcePath: 'packages/angular-solid', distPath: 'dist/angular-solid-icons' }
];

packages.forEach(({ name, sourcePath, distPath }) => {
  console.log(`📦 Publishing ${name} to GitHub Packages...`);
  
  try {
    // Build do pacote
    console.log(`  🔨 Building ${name}...`);
    execSync(`cd ${sourcePath} && npm run build`, { stdio: 'inherit' });
    
    // Publicar no GitHub Packages a partir do diretório dist
    console.log(`  📤 Publishing ${name} to GitHub Packages...`);
    execSync(`cd ${distPath} && npm publish`, { stdio: 'inherit' });
    
    console.log(`✅ ${name} published successfully to GitHub Packages\n`);
  } catch (error) {
    console.log(`❌ Error publishing ${name}:`, error.message);
  }
});

console.log('🎉 All packages published to GitHub Packages!');
console.log('\n📋 Next steps:');
console.log('1. Create .npmrc in your app: echo "@fredbnm:registry=https://npm.pkg.github.com" >> .npmrc');
console.log('2. Add GitHub token: echo "//npm.pkg.github.com/:_authToken=YOUR_TOKEN" >> .npmrc');
console.log('3. Install: npm install @fredbnm/angular-regular-icons @fredbnm/angular-solid-icons');




