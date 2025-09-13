#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Converting Stash Icons to Angular...\n');

// Lista de pacotes para converter
const packages = [
  { name: 'regular', target: 'angular-regular' },
  { name: 'solid', target: 'angular-solid' }
];

packages.forEach(({ name, target }) => {
  console.log(`📦 Converting ${name} icons to Angular...`);
  
  const sourcePath = path.join(__dirname, 'packages', name, 'src');
  const targetPath = path.join(__dirname, 'packages', target, 'src');
  
  // Verificar se o diretório fonte existe
  if (!fs.existsSync(sourcePath)) {
    console.log(`❌ Source directory not found: ${sourcePath}`);
    return;
  }
  
  // Executar conversão
  try {
    execSync(`cd packages/${target} && node convert-icons.js`, { stdio: 'inherit' });
    console.log(`✅ ${name} icons converted successfully\n`);
  } catch (error) {
    console.log(`❌ Error converting ${name} icons:`, error.message);
  }
});

console.log('🎉 All conversions completed!');
console.log('\n📋 Next steps:');
console.log('1. Test the packages: cd packages/angular-regular && npm run build');
console.log('2. Test the packages: cd packages/angular-solid && npm run build');
console.log('3. Publish the packages: npm publish');
