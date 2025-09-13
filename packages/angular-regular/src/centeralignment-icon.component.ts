import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-centeralignment',
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
          d="M20 6C20 5.44772 19.5523 5 19 5H5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H19C19.5523 7 20 6.55228 20 6Z"
          [attr.fill]="color"
        />
        <path
          d="M18 12C18 11.4477 17.5523 11 17 11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H17C17.5523 13 18 12.5523 18 12Z"
          [attr.fill]="color"
        />
        <path
          d="M20 18C20 17.4477 19.5523 17 19 17H5C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class CenterAlignmentIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}