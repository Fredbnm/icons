import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-or',
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.7216 19.3523V5H9V19.3523H10.7216ZM15.2099 19.3523V5H13.4883V19.3523H15.2099Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class OrIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}