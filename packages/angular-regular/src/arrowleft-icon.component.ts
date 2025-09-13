import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-arrowleft',
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
          d="M11.5303 6.46967C11.8232 6.76256 11.8232 7.23744 11.5303 7.53033L7.81066 11.25L18 11.25C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75L7.81066 12.75L11.5303 16.4697C11.8232 16.7626 11.8232 17.2374 11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303L5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class ArrowLeftIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}