import { Component } from '@angular/core';
import { HomeIconComponent, PersonIconComponent, CheckIconComponent } from './src/public-api';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [HomeIconComponent, PersonIconComponent, CheckIconComponent],
  template: `
    <div class="icon-examples">
      <h2>Stash Icons - Angular Examples</h2>
      
      <div class="icon-grid">
        <div class="icon-item">
          <stash-home [color]="'#ff6b6b'" [width]="32" [height]="32"></stash-home>
          <span>Home Icon</span>
        </div>
        
        <div class="icon-item">
          <stash-person [color]="'#4ecdc4'" [width]="32" [height]="32"></stash-person>
          <span>Person Icon</span>
        </div>
        
        <div class="icon-item">
          <stash-check [color]="'#45b7d1'" [width]="32" [height]="32"></stash-check>
          <span>Check Icon</span>
        </div>
      </div>
      
      <div class="custom-styles">
        <h3>Custom Styles</h3>
        <stash-home 
          [style]="{'color': '#ff9ff3', 'width': '48px', 'height': '48px'}"
          class="custom-icon">
        </stash-home>
      </div>
    </div>
  `,
  styles: [`
    .icon-examples {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    
    .icon-grid {
      display: flex;
      gap: 20px;
      margin: 20px 0;
    }
    
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
    
    .custom-styles {
      margin-top: 30px;
    }
    
    .custom-icon {
      transition: transform 0.3s ease;
    }
    
    .custom-icon:hover {
      transform: scale(1.2);
    }
  `]
})
export class ExampleComponent {}
