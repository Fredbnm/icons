import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-arrowright',
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
          d="M12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303C12.1768 17.2374 12.1768 16.7626 12.4697 16.4697L16.1893 12.75L6 12.75C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25L16.1893 11.25L12.4697 7.53033C12.1768 7.23744 12.1768 6.76256 12.4697 6.46967Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class ArrowRightIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}