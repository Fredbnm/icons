import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-spinner',
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
          d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z"
          [attr.fill]="color"
        />
        <path
          d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z"
          [attr.fill]="color"
        />
        <path
          d="M18 12C18 13.1046 18.8954 14 20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12Z"
          [attr.fill]="color"
        />
        <path
          d="M2 12C2 13.1046 2.89543 14 4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12Z"
          [attr.fill]="color"
        />
        <path
          d="M16.2426 16.2426C15.4616 17.0237 15.4616 18.29 16.2426 19.0711C17.0237 19.8521 18.29 19.8521 19.0711 19.0711C19.8521 18.29 19.8521 17.0237 19.0711 16.2426C18.29 15.4616 17.0237 15.4616 16.2426 16.2426Z"
          [attr.fill]="color"
        />
        <path
          d="M4.92893 4.92893C4.14788 5.70997 4.14788 6.9763 4.92893 7.75735C5.70998 8.5384 6.97631 8.5384 7.75736 7.75735C8.5384 6.9763 8.5384 5.70997 7.75736 4.92893C6.97631 4.14788 5.70998 4.14788 4.92893 4.92893Z"
          [attr.fill]="color"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.75735 16.2426C6.97631 15.4615 5.70998 15.4615 4.92893 16.2426C4.14788 17.0236 4.14788 18.29 4.92893 19.071C5.70997 19.8521 6.9763 19.8521 7.75735 19.071C8.5384 18.29 8.5384 17.0236 7.75735 16.2426Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class SpinnerIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}