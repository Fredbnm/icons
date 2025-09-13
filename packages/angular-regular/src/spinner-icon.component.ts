import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-spinner',
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
          d="M13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z"
          [attr.fill]="color"
        />
        <path
          d="M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20Z"
          [attr.fill]="color"
        />
        <path
          d="M19 12C19 12.5523 19.4477 13 20 13C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12Z"
          [attr.fill]="color"
        />
        <path
          d="M4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13Z"
          [attr.fill]="color"
        />
        <path
          d="M16.9497 16.9498C16.5592 17.3403 16.5592 17.9734 16.9497 18.364C17.3403 18.7545 17.9734 18.7545 18.364 18.364C18.7545 17.9734 18.7545 17.3403 18.364 16.9498C17.9734 16.5592 17.3403 16.5592 16.9497 16.9498Z"
          [attr.fill]="color"
        />
        <path
          d="M5.63604 7.05025C5.24551 6.65972 5.24551 6.02656 5.63604 5.63603C6.02656 5.24551 6.65973 5.24551 7.05025 5.63603C7.44078 6.02656 7.44078 6.65972 7.05025 7.05025C6.65973 7.44077 6.02656 7.44077 5.63604 7.05025Z"
          [attr.fill]="color"
        />
        <path
          d="M7.05025 16.9497C6.65972 16.5592 6.02656 16.5592 5.63603 16.9497C5.24551 17.3402 5.24551 17.9734 5.63603 18.3639C6.02656 18.7545 6.65972 18.7545 7.05025 18.3639C7.44077 17.9734 7.44077 17.3402 7.05025 16.9497Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class SpinnerIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}