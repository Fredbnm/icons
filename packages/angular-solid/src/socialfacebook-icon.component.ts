import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-socialfacebook',
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
          d="M13.4582 21.6959C18.1513 20.9921 21.75 16.9434 21.75 12.0542C21.75 6.66942 17.3848 2.3042 12 2.3042C6.61522 2.3042 2.25 6.66942 2.25 12.0542C2.25 16.9434 5.8487 20.9921 10.5418 21.6959V14.8978H8.49219C8.22373 14.8978 8.00611 14.6802 8.00611 14.4117V12.5687C8.00611 12.3002 8.22374 12.0826 8.49219 12.0826H10.5418L10.4695 10.1398C10.4695 9.19787 10.6447 7.6687 11.8123 6.83343C12.6281 6.24984 13.2347 6.14035 14.209 6.14038C15.0543 6.1404 15.6346 6.22383 16.0195 6.27916C16.0883 6.28905 16.1508 6.29803 16.2074 6.30549C16.3035 6.31812 16.3747 6.40012 16.3747 6.497V8.53717C16.3747 8.64982 16.2798 8.73742 16.1699 8.73134C16.1571 8.73064 16.1445 8.72962 16.1317 8.73017C16.0185 8.73505 15.4214 8.75969 14.9165 8.75969C14.0253 8.75969 13.4582 9.16615 13.4582 10.5152V12.0826H15.6499C15.9503 12.0826 16.1787 12.3523 16.1294 12.6486L15.8507 14.4916C15.8117 14.726 15.6089 14.8978 15.3712 14.8978H13.4582V21.6959Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class SocialFacebookIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}