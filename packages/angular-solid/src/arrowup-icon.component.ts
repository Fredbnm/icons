import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-arrowup',
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
          d="M12.8835 5.11573C12.3996 4.63296 11.6059 4.62636 11.1161 5.11613L6.11612 10.1161C5.62796 10.6043 5.62796 11.3957 6.11612 11.8839C6.60427 12.3721 7.39573 12.3721 7.88388 11.8839L10.75 9.01778V18C10.75 18.6904 11.3096 19.25 12 19.25C12.6904 19.25 13.25 18.6904 13.25 18V9.01778L16.1161 11.8839C16.6043 12.3721 17.3957 12.3721 17.8839 11.8839C18.372 11.3957 18.372 10.6043 17.8839 10.1161L12.8835 5.11573Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class ArrowUpIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}