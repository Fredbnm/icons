import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-equal',
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
          d="M5.75 10C5.75 9.30964 6.30964 8.75 7 8.75H17C17.6904 8.75 18.25 9.30964 18.25 10C18.25 10.6904 17.6904 11.25 17 11.25H7C6.30964 11.25 5.75 10.6904 5.75 10ZM5.75 14C5.75 13.3096 6.30964 12.75 7 12.75H17C17.6904 12.75 18.25 13.3096 18.25 14C18.25 14.6904 17.6904 15.25 17 15.25H7C6.30964 15.25 5.75 14.6904 5.75 14Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class EqualIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}