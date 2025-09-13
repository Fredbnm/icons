# 🚀 Quick Start - Angular Icons

## Instalação Rápida

### 1. Token GitHub
1. [GitHub Settings](https://github.com/settings/tokens) → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Scopes: ✅ `read:packages`
4. Copie o token

### 2. Configurar Projeto
```bash
# Criar .npmrc
echo "@fredbnm:registry=https://npm.pkg.github.com" >> .npmrc
echo "//npm.pkg.github.com/:_authToken=SEU_TOKEN" >> .npmrc

# Instalar
npm install @fredbnm/angular-regular-icons @fredbnm/angular-solid-icons
```

### 3. Usar
```typescript
import { DashboardIconComponent } from '@fredbnm/angular-regular-icons';

@Component({
  imports: [DashboardIconComponent],
  template: `<stash-dashboard></stash-dashboard>`
})
```

## ✅ Teste
```bash
npm view @fredbnm/angular-regular-icons
```

**Pronto!** 🎉
