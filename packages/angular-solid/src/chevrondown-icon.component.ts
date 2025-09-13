import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-chevrondown',
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
          d="M16.8839 9.11612C17.372 9.60427 17.372 10.3957 16.8839 10.8839L12 15.7678L7.11612 10.8839C6.62796 10.3957 6.62796 9.60427 7.11612 9.11612C7.60427 8.62796 8.39573 8.62796 8.88388 9.11612L12 12.2322L15.1161 9.11612C15.6043 8.62796 16.3957 8.62796 16.8839 9.11612Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class ChevronDownIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}