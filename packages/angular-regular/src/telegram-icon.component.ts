import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-telegram',
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
          d="M16.4634 8.84579L15.3729 15.8247C15.3077 16.2419 14.8372 16.4565 14.4794 16.2323L10.8288 13.9452C10.5041 13.7417 10.4575 13.2871 10.7341 13.022L13.7646 10.1176C13.7977 10.0859 13.7575 10.0333 13.7182 10.0568L9.32624 12.6854C9.06487 12.8418 8.75497 12.8963 8.45592 12.8384L6.86515 12.5306C6.29231 12.4198 6.21296 11.6324 6.75215 11.4095L15.2544 7.89417C15.8907 7.63112 16.5696 8.16558 16.4634 8.84579Z"
          [attr.fill]="color"
        />
        <path
          d="M11.9999 1.70587C6.31464 1.70587 1.70581 6.3147 1.70581 12C1.70581 17.6853 6.31464 22.2941 11.9999 22.2941C17.6852 22.2941 22.294 17.6853 22.294 12C22.294 6.3147 17.6852 1.70587 11.9999 1.70587ZM3.47052 12C3.47052 7.28932 7.28926 3.47058 11.9999 3.47058C16.7106 3.47058 20.5293 7.28932 20.5293 12C20.5293 16.7107 16.7106 20.5294 11.9999 20.5294C7.28926 20.5294 3.47052 16.7107 3.47052 12Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class TelegramIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}