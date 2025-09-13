import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-minus',
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
          d="M4.75 12C4.75 11.3096 5.30964 10.75 6 10.75H18C18.6904 10.75 19.25 11.3096 19.25 12C19.25 12.6904 18.6904 13.25 18 13.25H6C5.30964 13.25 4.75 12.6904 4.75 12Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class MinusIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}