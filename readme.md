# @fredbnm/angular-icons

Biblioteca de ícones Angular compatível com Angular 20+.

## 📦 Pacotes Disponíveis

- `@fredbnm/angular-regular-icons` - Ícones em estilo regular
- `@fredbnm/angular-solid-icons` - Ícones em estilo solid

## 🚀 Instalação

### 1. Gerar Token de Acesso GitHub

Cada desenvolvedor precisa criar seu próprio token de acesso:

1. **Acesse**: [GitHub Settings](https://github.com/settings/tokens)
2. **Vá para**: Developer settings → Personal access tokens → Tokens (classic)
3. **Clique**: "Generate new token" → "Generate new token (classic)"
4. **Configure**:
   - **Note**: "NPM Package Access"
   - **Expiration**: Escolha a duração (ex: 90 days)
   - **Scopes**: Marque apenas `✅ read:packages`
5. **Clique**: "Generate token"
6. **COPIE** o token imediatamente (você só verá uma vez!)

### 2. Configurar o Projeto

No diretório do seu projeto Angular, crie um arquivo `.npmrc`:

```bash
# Criar arquivo .npmrc
echo "@fredbnm:registry=https://npm.pkg.github.com" >> .npmrc
echo "//npm.pkg.github.com/:_authToken=SEU_TOKEN_AQUI" >> .npmrc
```

**⚠️ IMPORTANTE**: Substitua `SEU_TOKEN_AQUI` pelo token que você gerou no passo anterior.

### 3. Instalar a Biblioteca

```bash
# Instalar os pacotes
npm install @fredbnm/angular-regular-icons @fredbnm/angular-solid-icons

# Ou instalar apenas um
npm install @fredbnm/angular-regular-icons
```

### 4. Verificar Instalação

Para testar se está funcionando:

```bash
# Verificar se consegue acessar os pacotes
npm view @fredbnm/angular-regular-icons
npm view @fredbnm/angular-solid-icons
```

## 💻 Como Usar

### Importar o Componente

```typescript
import { Component } from '@angular/core';
import { DashboardIconComponent } from '@fredbnm/angular-regular-icons';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [DashboardIconComponent],
  template: `
    <stash-dashboard></stash-dashboard>
  `
})
export class ExampleComponent {}
```

### Usar no Template

```html
<!-- Ícone de Dashboard -->
<stash-dashboard></stash-dashboard>

<!-- Outros ícones disponíveis -->
<stash-home></stash-home>
<stash-user></stash-user>
<stash-settings></stash-settings>
```

## 🎨 Ícones Disponíveis

### Regular Icons
- `stash-dashboard` - Dashboard
- `stash-home` - Home
- `stash-user` - Usuário
- `stash-settings` - Configurações
- `stash-search` - Pesquisa
- `stash-bell` - Notificações
- E muitos outros...

### Solid Icons
- `stash-dashboard` - Dashboard (solid)
- `stash-home` - Home (solid)
- `stash-user` - Usuário (solid)
- E todos os ícones em versão solid...

## 🔧 Troubleshooting

### Erro: "Cannot find module"
```bash
# Verificar se o .npmrc está correto
cat .npmrc

# Deve mostrar:
# @fredbnm:registry=https://npm.pkg.github.com
# //npm.pkg.github.com/:_authToken=seu_token
```

### Erro: "401 Unauthorized"
- Verifique se o token está correto
- Verifique se o token tem permissão `read:packages`
- Gere um novo token se necessário

### Erro: "404 Not Found"
- Verifique se o nome do pacote está correto
- Verifique se você tem acesso ao repositório

## 📋 Exemplo Completo

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
  DashboardIconComponent,
  HomeIconComponent,
  UserIconComponent 
} from '@fredbnm/angular-regular-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DashboardIconComponent,
    HomeIconComponent,
    UserIconComponent
  ],
  template: `
    <nav>
      <a routerLink="/dashboard">
        <stash-dashboard></stash-dashboard>
        Dashboard
      </a>
      <a routerLink="/home">
        <stash-home></stash-home>
        Home
      </a>
      <a routerLink="/profile">
        <stash-user></stash-user>
        Perfil
      </a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
```

## 🆘 Suporte

Se encontrar problemas:

1. Verifique se seguiu todos os passos de instalação
2. Confirme que o token tem as permissões corretas
3. Teste com `npm view @fredbnm/angular-regular-icons`
4. Entre em contato com o administrador do projeto

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

---

**Versão**: 1.0.7  
**Compatibilidade**: Angular 20+  
**Última atualização**: Setembro 2025