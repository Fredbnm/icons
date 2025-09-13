import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-camweb',
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

        <circle
          cx="12"
          cy="10"
          r="6.5"
          [attr.fill]="color"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="10"
          r="4"
          [attr.fill]="color"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.13134 16.9683C6.5523 17.7389 5.78474 18.4853 5.1545 19.0447C4.79514 19.3637 5.0196 20 5.5001 20H18.5001C18.9806 20 19.2051 19.3637 18.8457 19.0447C18.2155 18.4853 17.4479 17.7389 16.8689 16.9683"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      
    </svg>`,
  standalone: true
})
export class CamWebIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}