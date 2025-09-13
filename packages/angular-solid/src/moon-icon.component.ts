import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-moon',
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
          d="M12 3C12.5751 3 12.6597 3.82001 12.1782 4.13443C10.2646 5.38379 9 7.54421 9 10C9 13.866 12.134 17 16 17C16.9227 17 17.8037 16.8215 18.6103 16.4971C19.0887 16.3047 19.6331 16.7982 19.3337 17.2181C17.702 19.5073 15.0253 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class MoonIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}