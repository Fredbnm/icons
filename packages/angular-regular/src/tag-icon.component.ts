import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-tag',
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
          d="M7.75792 9.37865C7.17213 8.79287 7.17213 7.84312 7.75792 7.25733C8.34371 6.67155 9.29345 6.67155 9.87924 7.25733C10.465 7.84312 10.465 8.79287 9.87924 9.37865C9.29345 9.96444 8.34371 9.96444 7.75792 9.37865Z"
          [attr.fill]="color"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.49755 4.56751C6.21922 4.70954 5.21009 5.71867 5.06806 6.997L4.64379 10.8154C4.55154 11.6457 4.84171 12.4729 5.43243 13.0636L12.5309 20.1621C13.6048 21.236 15.346 21.236 16.42 20.1621L20.6626 15.9194C21.7366 14.8455 21.7366 13.1043 20.6626 12.0303L13.5642 4.93188C12.9734 4.34116 12.1462 4.05099 11.3159 4.14324L7.49755 4.56751ZM6.55888 7.16265C6.62344 6.58159 7.08214 6.12289 7.6632 6.05833L11.4816 5.63407C11.859 5.59213 12.235 5.72403 12.5035 5.99254L19.602 13.091C20.0901 13.5792 20.0901 14.3706 19.602 14.8588L15.3593 19.1014C14.8712 19.5896 14.0797 19.5896 13.5916 19.1014L6.49309 12.0029C6.22458 11.7344 6.09268 11.3584 6.13462 10.981L6.55888 7.16265Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class TagIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}