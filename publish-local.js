#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Publishing Stash Icons Angular packages locally...\n');

// Lista de pacotes para publicar
const packages = [
  { name: 'angular-regular', path: 'packages/angular-regular' },
  { name: 'angular-solid', path: 'packages/angular-solid' }
];

packages.forEach(({ name, path: packagePath }) => {
  console.log(`📦 Building and publishing ${name}...`);
  
  try {
    // Build do pacote
    console.log(`  🔨 Building ${name}...`);
    execSync(`cd ${packagePath} && npm run build`, { stdio: 'inherit' });
    
    // Publicar localmente
    console.log(`  📤 Publishing ${name} locally...`);
    execSync(`cd ${packagePath} && npm pack`, { stdio: 'inherit' });
    
    console.log(`✅ ${name} published successfully\n`);
  } catch (error) {
    console.log(`❌ Error publishing ${name}:`, error.message);
  }
});

console.log('🎉 All packages published locally!');
console.log('\n📋 Next steps:');
console.log('1. Install in your app: npm install /path/to/package.tgz');
console.log('2. Or use npm link: npm link @stash-ui/angular-regular-icons');
console.log('3. Or publish to private registry: npm publish --registry=your-registry');
