import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-shop',
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
          d="M5.20723 5.4855C5.38796 5.1843 5.71346 5 6.06473 5H17.9323C18.2836 5 18.6091 5.1843 18.7898 5.4855L21.0442 9.24275C21.2441 9.57601 21.0041 10 20.6154 10H19.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H11.5C10.9477 19.5 10.5 19.0523 10.5 18.5V13.2C10.5 13.0895 10.4105 13 10.3 13H7.2C7.08954 13 7 13.0895 7 13.2V18.5C7 19.0523 6.55228 19.5 6 19.5H5.5C4.94772 19.5 4.5 19.0523 4.5 18.5V10H3.38163C2.99298 10 2.75293 9.57601 2.95289 9.24275L5.20723 5.4855ZM12.5 13.1667C12.5 12.9365 12.6865 12.75 12.9167 12.75H17.0833C17.3135 12.75 17.5 12.9365 17.5 13.1667V16.0833C17.5 16.3135 17.3135 16.5 17.0833 16.5H12.9167C12.6865 16.5 12.5 16.3135 12.5 16.0833V13.1667Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class ShopIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}