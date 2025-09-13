import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-table',
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

        <path d="M6 4C4.34315 4 3 5.34315 3 7V8.5H21V7C21 5.34315 19.6569 4 18 4H6Z" [attr.fill]="color" />
        <path d="M21 10H12.75V13.5H21V10Z" [attr.fill]="color" />
        <path d="M21 15H12.75L12.75 20H18C19.6569 20 21 18.6569 21 17V15Z" [attr.fill]="color" />
        <path d="M11.25 20L11.25 15H3V17C3 18.6569 4.34315 20 6 20H11.25Z" [attr.fill]="color" />
        <path d="M3 13.5H11.25V10H3V13.5Z" [attr.fill]="color" />
      
    </svg>`,
  standalone: true
})
export class TableIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}