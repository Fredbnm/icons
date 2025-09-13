import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-chevrondoubleleft',
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
          d="M17.5911 16.5303C17.2982 16.8232 16.8233 16.8232 16.5304 16.5303L12.0001 12L16.5304 7.46967C16.8233 7.17678 17.2982 7.17678 17.5911 7.46967C17.884 7.76256 17.884 8.23744 17.5911 8.53033L14.1214 12L17.5911 15.4697C17.884 15.7626 17.884 16.2374 17.5911 16.5303Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M11.7804 16.5303C11.4876 16.8232 11.0127 16.8232 10.7198 16.5303L6.18945 12L10.7198 7.46967C11.0127 7.17678 11.4876 7.17678 11.7804 7.46967C12.0733 7.76256 12.0733 8.23744 11.7804 8.53033L8.31077 12L11.7804 15.4697C12.0733 15.7626 12.0733 16.2374 11.7804 16.5303Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class ChevronDoubleLeftIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}