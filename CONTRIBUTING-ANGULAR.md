# Contributing to Angular Packages

Este guia explica como contribuir para os pacotes Angular do Stash Icons.

## Estrutura dos Pacotes Angular

```
packages/
├── angular-regular/     # Ícones regulares para Angular
├── angular-solid/       # Ícones sólidos para Angular
├── regular/             # Ícones regulares originais (React)
└── solid/               # Ícones sólidos originais (React)
```

## Como Adicionar Novos Ícones

### 1. Adicionar o Ícone Original

Adicione o ícone no pacote React original:

```bash
# É necessário adicionar um arquivo .tsx no pacote regular ou solid
# Exemplo: packages/regular/src/NewIcon.tsx
```

### 2. Converter para Angular

Execute o script de conversão:

```bash
# Na raiz do projeto
node convert-to-angular.js
```

Ou converta manualmente:

```bash
cd packages/angular-regular
node convert-icons.js
```

### 3. Testar o Build

```bash
cd packages/angular-regular
npm run build
```

## Estrutura dos Componentes Angular

Cada ícone é convertido para um componente Angular standalone:

```typescript
import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-icon-name',
  template: `<svg>...</svg>`,
  standalone: true
})
export class IconNameComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}
```

## Convenções de Nomenclatura

- **Seletor**: `stash-{icon-name}` (kebab-case)
- **Componente**: `{IconName}Component` (PascalCase)
- **Arquivo**: `{icon-name}-icon.component.ts` (kebab-case)

## Testando Localmente

### 1. Build dos Pacotes

```bash
# Build regular icons
cd packages/angular-regular
npm run build

# Build solid icons
cd packages/angular-solid
npm run build
```

### 2. Teste em Aplicação Angular

```bash
# Instalar o pacote localmente
npm install /path/to/packages/angular-regular

# Usar no componente
import { HomeIconComponent } from '@stash-ui/angular-regular-icons';
```

## Publicação

Os pacotes Angular são publicados automaticamente quando você executa:

```bash
# Na raiz do projeto
npm run publish:all
```

## Troubleshooting

### Erro de Build

Se o build falhar, verifique:

1. **Dependências**: Certifique-se de que todas as dependências estão instaladas
2. **TypeScript**: Verifique se não há erros de tipo
3. **Templates**: Verifique se os templates SVG estão corretos

### Erro de Conversão

Se a conversão falhar:

1. **Arquivo fonte**: Verifique se o arquivo .tsx original existe
2. **Formato**: Verifique se o arquivo segue o padrão React esperado
3. **SVG**: Verifique se o SVG está bem formado

## Scripts Úteis

```bash
# Converter todos os ícones
node convert-to-angular.js

# Build específico
cd packages/angular-regular && npm run build

# Watch mode
cd packages/angular-regular && npm run watch

# Limpar builds
rm -rf packages/*/dist
```

## Estrutura de Arquivos

```
packages/angular-regular/
├── src/
│   ├── types.ts                    # Interfaces TypeScript
│   ├── public-api.ts              # Exports públicos
│   ├── home-icon.component.ts     # Componente do ícone
│   └── ...                        # Outros ícones
├── package.json                   # Configuração do pacote
├── ng-package.json               # Configuração ng-packagr
├── tsconfig.json                 # Configuração TypeScript
├── convert-icons.js              # Script de conversão
└── README.md                     # Documentação
```



