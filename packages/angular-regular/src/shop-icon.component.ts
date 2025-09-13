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
          d="M6.06393 5.75C5.97612 5.75 5.89474 5.79607 5.84956 5.87138L3.82238 9.25H20.1731L18.1459 5.87138C18.1007 5.79607 18.0194 5.75 17.9316 5.75H6.06393ZM3.38084 10.75H3.75V18.5C3.75 19.4665 4.5335 20.25 5.5 20.25H6C6.9665 20.25 7.75 19.4665 7.75 18.5V13.75H9.75V18.5C9.75 19.4665 10.5335 20.25 11.5 20.25H18.5C19.4665 20.25 20.25 19.4665 20.25 18.5V10.75H20.6146C21.5863 10.75 22.1864 9.69004 21.6865 8.85688L19.4322 5.09963C19.1159 4.57252 18.5463 4.25 17.9316 4.25H6.06393C5.44922 4.25 4.87958 4.57252 4.56332 5.09963L2.30897 8.85688C1.80908 9.69004 2.40922 10.75 3.38084 10.75ZM5.25 18.5V10.75H18.75V18.5C18.75 18.6381 18.6381 18.75 18.5 18.75H11.5C11.3619 18.75 11.25 18.6381 11.25 18.5V13.2C11.25 12.6753 10.8247 12.25 10.3 12.25H7.2C6.67533 12.25 6.25 12.6753 6.25 13.2V18.5C6.25 18.6381 6.13807 18.75 6 18.75H5.5C5.36193 18.75 5.25 18.6381 5.25 18.5ZM13.25 15.75V13.5H16.75V15.75H13.25ZM12.9167 12C12.2723 12 11.75 12.5223 11.75 13.1667V16.0833C11.75 16.7277 12.2723 17.25 12.9167 17.25H17.0833C17.7277 17.25 18.25 16.7277 18.25 16.0833V13.1667C18.25 12.5223 17.7277 12 17.0833 12H12.9167Z"
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