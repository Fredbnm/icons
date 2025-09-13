import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-contentshare',
  template: `<svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      [class]="className"
      [style]="style"
      [attr.color]="color"
    >

        <path
          d="M13.7036 6.8885L19.1666 11.1808C19.4214 11.381 19.4214 11.7669 19.1666 11.9671L13.7036 16.2594C13.3418 16.5437 12.8205 16.2296 12.9028 15.7768L13.2582 13.8222C8.2419 12.6184 6.15007 15.3163 5.34379 17.0574C5.22637 17.311 4.72946 17.2619 4.7045 16.9836C4.05876 9.7827 8.78639 8.7401 13.2748 9.41704L12.9028 7.3711C12.8205 6.91835 13.3418 6.60419 13.7036 6.8885Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class ContentShareIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}