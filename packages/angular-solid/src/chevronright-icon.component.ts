import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-chevronright',
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
          d="M9.11612 7.11612C9.60427 6.62796 10.3957 6.62796 10.8839 7.11612L15.7678 12L10.8839 16.8839C10.3957 17.372 9.60427 17.372 9.11612 16.8839C8.62796 16.3957 8.62796 15.6043 9.11612 15.1161L12.2322 12L9.11612 8.88388C8.62796 8.39573 8.62796 7.60427 9.11612 7.11612Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class ChevronRightIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}