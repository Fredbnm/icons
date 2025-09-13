import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-cloud',
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
          d="M11 4.25C7.71729 4.25 4.98282 6.59273 4.37564 9.69779C2.53522 10.5131 1.25 12.3556 1.25 14.5C1.25 17.3995 3.6005 19.75 6.5 19.75H17.5C20.3995 19.75 22.75 17.3995 22.75 14.5C22.75 11.6074 20.4107 9.26123 17.5208 9.25004C16.7497 6.37034 14.1231 4.25 11 4.25Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class CloudIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}