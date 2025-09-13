import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-home',
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
          d="M12 4.04987L21.4605 11.408C21.7875 11.6623 21.8464 12.1335 21.592 12.4605C21.3377 12.7874 20.8665 12.8463 20.5396 12.592L19.75 11.9779V20C19.75 20.4142 19.4142 20.75 19 20.75C18.5858 20.75 18.25 20.4142 18.25 20V10.8113L12 5.95016L5.75003 10.8113V20C5.75003 20.4142 5.41425 20.75 5.00003 20.75C4.58582 20.75 4.25003 20.4142 4.25003 20V11.9779L3.46049 12.592C3.13353 12.8463 2.66232 12.7874 2.40802 12.4605C2.15372 12.1335 2.21262 11.6623 2.53958 11.408L4.25003 10.0776V7.50001C4.25003 6.80965 4.80968 6.25001 5.50003 6.25001H6.50003C7.14352 6.25001 7.67344 6.73624 7.74243 7.36134L12 4.04987ZM6.25003 8.42501V7.75001H5.75003V8.80001L6.25003 8.42501Z"
          [attr.fill]="color"
        />
        <path
          d="M10.5 14.75C10.362 14.75 10.25 14.8619 10.25 15V20C10.25 20.4142 9.91425 20.75 9.50003 20.75C9.08582 20.75 8.75003 20.4142 8.75003 20V15C8.75003 14.0335 9.53354 13.25 10.5 13.25H13.5C14.4665 13.25 15.25 14.0335 15.25 15V20C15.25 20.4142 14.9142 20.75 14.5 20.75C14.0858 20.75 13.75 20.4142 13.75 20V15C13.75 14.8619 13.6381 14.75 13.5 14.75H10.5Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class HomeIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}