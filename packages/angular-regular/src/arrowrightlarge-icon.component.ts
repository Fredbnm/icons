import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-arrowrightlarge',
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
          d="M14.8161 4.4569C15.116 4.17123 15.5908 4.18281 15.8764 4.48276L22.5431 11.4828C22.819 11.7724 22.819 12.2276 22.5431 12.5172L15.8764 19.5172C15.5908 19.8172 15.116 19.8288 14.8161 19.5431C14.5161 19.2574 14.5046 18.7827 14.7902 18.4828L20.25 12.75L2 12.75C1.58579 12.75 1.25 12.4142 1.25 12C1.25 11.5858 1.58579 11.25 2 11.25L20.25 11.25L14.7902 5.51724C14.5046 5.2173 14.5161 4.74256 14.8161 4.4569Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class ArrowRightLargeIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}