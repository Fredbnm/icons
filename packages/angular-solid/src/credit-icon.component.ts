import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-credit',
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
          d="M16 18C16 19.1046 13.7614 20 11 20C8.23858 20 6 19.1046 6 18V16.1055C7.0749 16.6444 8.91291 17 11 17C13.0871 17 14.9251 16.6444 16 16.1055V18Z"
          [attr.fill]="color"
        />
        <path
          d="M16 15H15.8984C15.7182 15.139 15.4021 15.3073 14.9268 15.4658C13.9679 15.7854 12.5793 16 11 16C9.42072 16 8.03211 15.7854 7.07324 15.4658C6.59732 15.3072 6.28071 15.1391 6.10059 15H6V12.1055C7.0749 12.6444 8.91291 13 11 13C13.0871 13 14.9251 12.6444 16 12.1055V15Z"
          [attr.fill]="color"
        />
        <path
          d="M19 14C19 14.6542 18.2139 15.2318 17 15.5967V12.7305C17.8026 12.5756 18.488 12.3622 19 12.1055V14Z"
          [attr.fill]="color"
        />
        <path
          d="M11 9C13.7614 9 16 9.89543 16 11H15.8984C15.7182 11.139 15.4021 11.3073 14.9268 11.4658C13.9679 11.7854 12.5793 12 11 12C9.42072 12 8.03211 11.7854 7.07324 11.4658C6.59732 11.3072 6.28071 11.1391 6.10059 11H6C6 9.89543 8.23858 9 11 9Z"
          [attr.fill]="color"
        />
        <path
          d="M19 11H18.8984C18.7182 11.139 18.4021 11.3073 17.9268 11.4658C17.6515 11.5576 17.3404 11.6381 17 11.71V10C17 9.5805 16.6768 9.19169 16.125 8.87012C17.3069 8.72076 18.3105 8.45119 19 8.10547V11Z"
          [attr.fill]="color"
        />
        <path
          d="M14 5C16.7614 5 19 5.89543 19 7H18.8984C18.7182 7.13898 18.4021 7.30734 17.9268 7.46582C16.9679 7.78544 15.5793 8 14 8C12.4207 8 11.0321 7.78544 10.0732 7.46582C9.59732 7.30716 9.28071 7.13908 9.10059 7H9C9 5.89543 11.2386 5 14 5Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class CreditIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}