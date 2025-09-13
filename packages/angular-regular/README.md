# Angular Regular Icons

A collection of high-quality and well designed SVG icons for Angular applications.

## Installation

```bash
npm install @stash-ui/angular-regular-icons
# or
yarn add @stash-ui/angular-regular-icons
```

## Usage

### Standalone Components (Angular 14+)

```typescript
import { Component } from '@angular/core';
import { HomeIconComponent, PersonIconComponent } from '@stash-ui/angular-regular-icons';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [HomeIconComponent, PersonIconComponent],
  template: `
    <stash-home [color]="'#ff0000'" [width]="32" [height]="32"></stash-home>
    <stash-person [color]="'currentColor'" [width]="24" [height]="24"></stash-person>
  `
})
export class ExampleComponent {}
```

### Module-based Components

```typescript
import { NgModule } from '@angular/core';
import { HomeIconComponent, PersonIconComponent } from '@stash-ui/angular-regular-icons';

@NgModule({
  declarations: [YourComponent],
  imports: [HomeIconComponent, PersonIconComponent],
})
export class YourModule {}
```

## Properties

All icon components accept the following properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | `string` | `'currentColor'` | Color of the icon |
| `width` | `string \| number` | `'24'` | Width of the icon |
| `height` | `string \| number` | `'24'` | Height of the icon |
| `className` | `string` | `undefined` | CSS class name |
| `style` | `object` | `undefined` | Inline styles |

## Available Icons

This package includes 324 regular icons. All icons follow the naming pattern `stash-{icon-name}`.

Examples:
- `<stash-home></stash-home>`
- `<stash-person></stash-person>`
- `<stash-check></stash-check>`
- `<stash-arrow-right></stash-arrow-right>`

## Styling

Icons inherit the current text color by default. You can customize them using CSS:

```css
stash-home {
  color: #ff0000;
  width: 32px;
  height: 32px;
}
```

## License

Licensed under the MIT License, Copyright © 2022-present Pingback LLC.
