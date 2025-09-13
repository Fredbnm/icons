import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-arrowright',
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
          d="M13.8839 6.11612C13.3957 5.62796 12.6043 5.62796 12.1161 6.11612C11.628 6.60427 11.628 7.39573 12.1161 7.88388L14.9822 10.75L6 10.75C5.30964 10.75 4.75 11.3096 4.75 12C4.75 12.6904 5.30964 13.25 6 13.25L14.9822 13.25L12.1161 16.1161C11.628 16.6043 11.628 17.3957 12.1161 17.8839C12.6043 18.372 13.3957 18.372 13.8839 17.8839L18.8839 12.8839C19.372 12.3957 19.372 11.6043 18.8839 11.1161L13.8839 6.11612Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class ArrowRightIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}