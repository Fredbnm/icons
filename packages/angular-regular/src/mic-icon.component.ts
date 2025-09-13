import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-mic',
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
          d="M8.75 6.5C8.75 4.70508 10.2051 3.25 12 3.25C13.7949 3.25 15.25 4.70507 15.25 6.5V12.5C15.25 14.2949 13.7949 15.75 12 15.75C10.2051 15.75 8.75 14.2949 8.75 12.5V6.5ZM12 4.75C11.0335 4.75 10.25 5.5335 10.25 6.5V12.5C10.25 13.4665 11.0335 14.25 12 14.25C12.9665 14.25 13.75 13.4665 13.75 12.5V6.5C13.75 5.5335 12.9665 4.75 12 4.75ZM7 11.75C7.41421 11.75 7.75 12.0858 7.75 12.5C7.75 14.8472 9.65279 16.75 12 16.75C14.3472 16.75 16.25 14.8472 16.25 12.5C16.25 12.0858 16.5858 11.75 17 11.75C17.4142 11.75 17.75 12.0858 17.75 12.5C17.75 15.4214 15.5713 17.834 12.75 18.2015V19.25H15C15.4142 19.25 15.75 19.5858 15.75 20C15.75 20.4142 15.4142 20.75 15 20.75H9C8.58579 20.75 8.25 20.4142 8.25 20C8.25 19.5858 8.58579 19.25 9 19.25H11.25V18.2015C8.42873 17.834 6.25 15.4214 6.25 12.5C6.25 12.0858 6.58579 11.75 7 11.75Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class MicIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}