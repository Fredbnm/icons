import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-arrowdownlarge',
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
          d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2L12.75 20.25L18.4828 14.7902C18.7827 14.5046 19.2574 14.5161 19.5431 14.8161C19.8288 15.116 19.8172 15.5908 19.5172 15.8764L12.5172 22.5431C12.2276 22.819 11.7724 22.819 11.4828 22.5431L4.48276 15.8764C4.18281 15.5908 4.17123 15.116 4.4569 14.8161C4.74256 14.5161 5.2173 14.5046 5.51724 14.7902L11.25 20.25L11.25 2C11.25 1.58579 11.5858 1.25 12 1.25Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class ArrowDownLargeIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}