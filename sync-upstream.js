#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔄 Sincronizando com o projeto original Stash Icons...\n');

try {
  // 1. Buscar atualizações do upstream
  console.log('📥 Buscando atualizações do repositório original...');
  execSync('git fetch upstream', { stdio: 'inherit' });
  
  // 2. Verificar se há mudanças
  console.log('\n🔍 Verificando mudanças...');
  const status = execSync('git status --porcelain', { encoding: 'utf8' });
  
  if (status.trim()) {
    console.log('⚠️  Há mudanças não commitadas. Fazendo stash...');
    execSync('git stash', { stdio: 'inherit' });
  }
  
  // 3. Fazer merge das mudanças
  console.log('\n🔄 Fazendo merge das mudanças...');
  execSync('git merge upstream/master', { stdio: 'inherit' });
  
  // 4. Verificar se há novos ícones
  console.log('\n🔍 Verificando novos ícones...');
  const regularIcons = execSync('find packages/regular/src -name "*.tsx" | wc -l', { encoding: 'utf8' }).trim();
  const solidIcons = execSync('find packages/solid/src -name "*.tsx" | wc -l', { encoding: 'utf8' }).trim();
  
  console.log(`📊 Ícones encontrados:`);
  console.log(`   Regular: ${regularIcons}`);
  console.log(`   Solid: ${solidIcons}`);
  
  // 5. Converter novos ícones para Angular
  console.log('\n🔄 Convertendo ícones para Angular...');
  execSync('npm run convert:angular', { stdio: 'inherit' });
  
  // 6. Build dos pacotes Angular
  console.log('\n🔨 Fazendo build dos pacotes Angular...');
  execSync('npm run build:angular', { stdio: 'inherit' });
  
  // 7. Atualizar versões
  console.log('\n📝 Atualizando versões...');
  const packageJson = JSON.parse(fs.readFileSync('packages/angular-regular/package.json', 'utf8'));
  const currentVersion = packageJson.version;
  const [major, minor, patch] = currentVersion.split('.').map(Number);
  const newVersion = `${major}.${minor}.${patch + 1}`;
  
  // Atualizar versão regular
  execSync(`cd packages/angular-regular && npm version ${newVersion} --no-git-tag-version --legacy-peer-deps`, { stdio: 'inherit' });
  
  // Atualizar versão solid
  execSync(`cd packages/angular-solid && npm version ${newVersion} --no-git-tag-version --legacy-peer-deps`, { stdio: 'inherit' });
  
  console.log(`\n✅ Versão atualizada para ${newVersion}`);
  
  // 8. Publicar no GitHub Packages
  console.log('\n📤 Publicando no GitHub Packages...');
  execSync('npm run publish:github', { stdio: 'inherit' });
  
  // 9. Commit das mudanças
  console.log('\n💾 Fazendo commit das mudanças...');
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "feat: sync with upstream and update Angular packages to v${newVersion}"`, { stdio: 'inherit' });
  
  // 10. Push para o fork
  console.log('\n🚀 Enviando para o fork...');
  execSync('git push origin master', { stdio: 'inherit' });
  
  console.log('\n🎉 Sincronização concluída com sucesso!');
  console.log('\n📋 Resumo:');
  console.log(`   ✅ Sincronizado com upstream`);
  console.log(`   ✅ Convertidos ${regularIcons} ícones regulares`);
  console.log(`   ✅ Convertidos ${solidIcons} ícones sólidos`);
  console.log(`   ✅ Versão atualizada para ${newVersion}`);
  console.log(`   ✅ Publicado no GitHub Packages`);
  console.log(`   ✅ Commitado e enviado para o fork`);
  
} catch (error) {
  console.error('❌ Erro durante a sincronização:', error.message);
  process.exit(1);
}
