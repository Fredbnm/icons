import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-cornerupleft',
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
          d="M20 20.75C20.4142 20.75 20.75 20.4142 20.75 20V18.566C20.75 16.9146 20.75 15.6292 20.6658 14.5981C20.5802 13.5512 20.4041 12.7007 20.0143 11.9356C19.3671 10.6655 18.3345 9.63285 17.0644 8.98571C16.2993 8.59588 15.4488 8.41977 14.4019 8.33424C13.3708 8.24999 12.0854 8.25 10.434 8.25H5.81066L9.53033 4.53033C9.82322 4.23744 9.82322 3.76256 9.53033 3.46967C9.23744 3.17678 8.76256 3.17678 8.46967 3.46967L3.46967 8.46967C3.17678 8.76256 3.17678 9.23744 3.46967 9.53033L8.46967 14.5303C8.76256 14.8232 9.23744 14.8232 9.53033 14.5303C9.82322 14.2374 9.82322 13.7626 9.53033 13.4697L5.81066 9.75H10.4C12.0925 9.75 13.3168 9.75058 14.2797 9.82925C15.2338 9.90721 15.8651 10.0581 16.3835 10.3222C17.3713 10.8256 18.1744 11.6287 18.6778 12.6166C18.9419 13.1349 19.0928 13.7662 19.1707 14.7203C19.2494 15.6832 19.25 16.9075 19.25 18.6V20C19.25 20.4142 19.5858 20.75 20 20.75Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class CornerUpLeftIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}