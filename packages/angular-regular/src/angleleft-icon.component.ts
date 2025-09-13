import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-angleleft',
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
          d="M13.8363 8.96362C14.1878 9.31509 14.1878 9.88494 13.8363 10.2364L12.0727 12L13.8363 13.7636C14.1878 14.1151 14.1878 14.6849 13.8363 15.0364C13.4848 15.3879 12.915 15.3879 12.5635 15.0364L10.1635 12.6364C9.81203 12.2849 9.81203 11.7151 10.1635 11.3636L12.5635 8.96362C12.915 8.61214 13.4848 8.61214 13.8363 8.96362Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class AngleLeftIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}