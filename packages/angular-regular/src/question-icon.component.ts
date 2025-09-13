import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-question',
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
          d="M12 8.75C11.3096 8.75 10.75 9.30964 10.75 10V10.1071C10.75 10.5214 10.4142 10.8571 10 10.8571 9.58579 10.8571 9.25 10.5214 9.25 10.1071V10C9.25 8.48122 10.4812 7.25 12 7.25H12.1164C13.5709 7.25 14.75 8.42912 14.75 9.88365 14.75 10.6525 14.414 11.3829 13.8303 11.8833L13.0595 12.5439C12.8631 12.7123 12.75 12.9582 12.75 13.2169V13.75C12.75 14.1642 12.4142 14.5 12 14.5 11.5858 14.5 11.25 14.1642 11.25 13.75V13.2169C11.25 12.5203 11.5544 11.8584 12.0833 11.405L12.8541 10.7444C13.1054 10.529 13.25 10.2146 13.25 9.88365 13.25 9.25755 12.7424 8.75 12.1164 8.75H12zM12 17C12.5523 17 13 16.5523 13 16 13 15.4477 12.5523 15 12 15 11.4477 15 11 15.4477 11 16 11 16.5523 11.4477 17 12 17z"
          [attr.fill]="color"
        />
        <path
          d="M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12ZM12 4.75C7.99594 4.75 4.75 7.99594 4.75 12C4.75 16.0041 7.99594 19.25 12 19.25C16.0041 19.25 19.25 16.0041 19.25 12C19.25 7.99594 16.0041 4.75 12 4.75Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class QuestionIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}