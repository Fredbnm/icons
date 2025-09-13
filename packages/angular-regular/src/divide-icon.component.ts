import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-divide',
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
          d="M12 5.25C10.7574 5.25 9.75 6.25736 9.75 7.5 9.75 8.74264 10.7574 9.75 12 9.75 13.2426 9.75 14.25 8.74264 14.25 7.5 14.25 6.25736 13.2426 5.25 12 5.25zM11.25 7.5C11.25 7.08579 11.5858 6.75 12 6.75 12.4142 6.75 12.75 7.08579 12.75 7.5 12.75 7.91421 12.4142 8.25 12 8.25 11.5858 8.25 11.25 7.91421 11.25 7.5zM5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12 18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12zM9.75 16.5C9.75 15.2574 10.7574 14.25 12 14.25 13.2426 14.25 14.25 15.2574 14.25 16.5 14.25 17.7426 13.2426 18.75 12 18.75 10.7574 18.75 9.75 17.7426 9.75 16.5zM12 15.75C11.5858 15.75 11.25 16.0858 11.25 16.5 11.25 16.9142 11.5858 17.25 12 17.25 12.4142 17.25 12.75 16.9142 12.75 16.5 12.75 16.0858 12.4142 15.75 12 15.75z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class DivideIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}