import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-chevronup',
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
          d="M7.11612 14.8839C6.62796 14.3957 6.62796 13.6043 7.11612 13.1161L12 8.23223L16.8839 13.1161C17.372 13.6043 17.372 14.3957 16.8839 14.8839C16.3957 15.372 15.6043 15.372 15.1161 14.8839L12 11.7678L8.88388 14.8839C8.39573 15.372 7.60427 15.372 7.11612 14.8839Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class ChevronUpIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}