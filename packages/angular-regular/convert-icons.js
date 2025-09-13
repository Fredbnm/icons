const fs = require('fs');
const path = require('path');

// Função para converter um ícone React para Angular
function convertReactToAngular(reactContent, iconName) {
  // Extrair o SVG content
  const svgMatch = reactContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  if (!svgMatch) return null;

  const svgContent = svgMatch[1];
  const svgAttributes = reactContent.match(/<svg([^>]*)>/)[1];

  // Converter para template Angular
  const angularTemplate = `<svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      [class]="className"
      [style]="style"
      [attr.color]="color"
    >
${svgContent.replace(/fill=\{color\}/g, '[attr.fill]="color"')}
    </svg>`;

  const componentName = iconName.replace('Icon', '') + 'IconComponent';
  const selector = `stash-${iconName.toLowerCase().replace('icon', '')}`;

  return `import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: '${selector}',
  template: \`${angularTemplate}\`,
  standalone: true
})
export class ${componentName} implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}`;
}

// Função para processar todos os ícones
function convertAllIcons() {
  const regularIconsPath = path.join(__dirname, '../regular/src');
  const outputPath = path.join(__dirname, 'src');
  
  // Ler todos os arquivos .tsx
  const files = fs.readdirSync(regularIconsPath)
    .filter(file => file.endsWith('.tsx') && file !== 'index.tsx' && file !== 'types.tsx');

  const exports = [];
  const components = [];

  files.forEach(file => {
    const iconName = file.replace('.tsx', '');
    const reactContent = fs.readFileSync(path.join(regularIconsPath, file), 'utf8');
    
    const angularContent = convertReactToAngular(reactContent, iconName);
    
    if (angularContent) {
      // Salvar o componente Angular
      const componentFileName = iconName.toLowerCase().replace('icon', '-icon') + '.component.ts';
      fs.writeFileSync(path.join(outputPath, componentFileName), angularContent);
      
      // Adicionar ao array de exports
      const componentName = iconName.replace('Icon', '') + 'IconComponent';
      exports.push(`export { ${componentName} } from './${componentFileName.replace('.ts', '')}';`);
      components.push(componentName);
    }
  });

  // Criar o arquivo de exports
  const publicApiContent = `// Public API for Angular Regular Icons
${exports.join('\n')}

// Module exports
export * from './types';`;

  fs.writeFileSync(path.join(outputPath, 'public-api.ts'), publicApiContent);

  console.log(`Convertidos ${files.length} ícones para Angular`);
  console.log('Componentes criados:', components.length);
}

// Executar a conversão
convertAllIcons();
