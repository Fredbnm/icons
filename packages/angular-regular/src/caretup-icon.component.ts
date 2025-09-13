import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-caretup',
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
          d="M11.3602 9.77273L8.16139 13.4091C7.766 13.8586 8.14216 14.5 8.80116 14.5H15.1988C15.8578 14.5 16.234 13.8586 15.8386 13.4091L12.6398 9.77273C12.3199 9.40909 11.6801 9.40909 11.3602 9.77273Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class CaretUpIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}