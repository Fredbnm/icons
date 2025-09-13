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
          d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 8.75C11.3096 8.75 10.75 9.30964 10.75 10V10.1071C10.75 10.5214 10.4142 10.8571 10 10.8571C9.58579 10.8571 9.25 10.5214 9.25 10.1071V10C9.25 8.48122 10.4812 7.25 12 7.25H12.1164C13.5709 7.25 14.75 8.42912 14.75 9.88365C14.75 10.6525 14.414 11.3829 13.8303 11.8833L13.0595 12.5439C12.8631 12.7123 12.75 12.9582 12.75 13.2169V13.75C12.75 14.1642 12.4142 14.5 12 14.5C11.5858 14.5 11.25 14.1642 11.25 13.75V13.2169C11.25 12.5203 11.5544 11.8584 12.0833 11.405L12.8541 10.7444C13.1054 10.529 13.25 10.2146 13.25 9.88365C13.25 9.25755 12.7424 8.75 12.1164 8.75H12ZM13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z"
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