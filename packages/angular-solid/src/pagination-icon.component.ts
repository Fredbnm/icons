import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-pagination',
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
          d="M4 10L2 12 4 14M20 10L22 12 20 14"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="7"
          y="7"
          width="10"
          height="10"
          rx="3"
          [attr.fill]="color"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="7"
          y="7"
          width="10"
          height="10"
          rx="3"
          [attr.fill]="color"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      
    </svg>`,
  standalone: true
})
export class PaginationIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}