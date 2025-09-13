import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-squarecheck',
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
          d="M4.54497 6.73005C5.02433 5.78924 5.78924 5.02433 6.73005 4.54497C7.79961 4 9.19974 4 12 4C14.8003 4 16.2004 4 17.27 4.54497C18.2108 5.02433 18.9757 5.78924 19.455 6.73005C20 7.79961 20 9.19974 20 12C20 14.8003 20 16.2004 19.455 17.27C18.9757 18.2108 18.2108 18.9757 17.27 19.455C16.2004 20 14.8003 20 12 20C9.19974 20 7.79961 20 6.73005 19.455C5.78924 18.9757 5.02433 18.2108 4.54497 17.27C4 16.2004 4 14.8003 4 12C4 9.19974 4 7.79961 4.54497 6.73005ZM15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967C15.2374 9.17678 14.7626 9.17678 14.4697 9.46967L11 12.9393L9.53033 11.4697C9.23744 11.1768 8.76256 11.1768 8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L10.4697 14.5303C10.7626 14.8232 11.2374 14.8232 11.5303 14.5303L15.5303 10.5303Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class SquareCheckIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}