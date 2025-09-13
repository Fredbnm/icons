import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-cornerdownleft',
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
          d="M20 3.25C20.4142 3.25 20.75 3.58579 20.75 4V5.43396C20.75 7.08539 20.75 8.37078 20.6658 9.40186C20.5802 10.4488 20.4041 11.2993 20.0143 12.0644C19.3671 13.3345 18.3345 14.3671 17.0644 15.0143C16.2993 15.4041 15.4488 15.5802 14.4019 15.6658C13.3708 15.75 12.0854 15.75 10.434 15.75H5.81066L9.53033 19.4697C9.82322 19.7626 9.82322 20.2374 9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303L3.46967 15.5303C3.17678 15.2374 3.17678 14.7626 3.46967 14.4697L8.46967 9.46967C8.76256 9.17678 9.23744 9.17678 9.53033 9.46967C9.82322 9.76256 9.82322 10.2374 9.53033 10.5303L5.81066 14.25H10.4C12.0925 14.25 13.3168 14.2494 14.2797 14.1707C15.2338 14.0928 15.8651 13.9419 16.3835 13.6778C17.3713 13.1744 18.1744 12.3713 18.6778 11.3834C18.9419 10.8651 19.0928 10.2338 19.1707 9.27971C19.2494 8.31683 19.25 7.09253 19.25 5.4V4C19.25 3.58579 19.5858 3.25 20 3.25Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class CornerDownLeftIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}