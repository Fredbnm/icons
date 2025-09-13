import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-squareminus',
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
          d="M4.54497 6.73005C4 7.79961 4 9.19974 4 12C4 14.8003 4 16.2004 4.54497 17.27C5.02433 18.2108 5.78924 18.9757 6.73005 19.455C7.79961 20 9.19974 20 12 20C14.8003 20 16.2004 20 17.27 19.455C18.2108 18.9757 18.9757 18.2108 19.455 17.27C20 16.2004 20 14.8003 20 12C20 9.19974 20 7.79961 19.455 6.73005C18.9757 5.78924 18.2108 5.02433 17.27 4.54497C16.2004 4 14.8003 4 12 4C9.19974 4 7.79961 4 6.73005 4.54497C5.78924 5.02433 5.02433 5.78924 4.54497 6.73005ZM9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class SquareMinusIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}