import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-caretright',
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
          d="M14.2273 12.6398L10.5909 15.8386C10.1414 16.234 9.5 15.8578 9.5 15.1988V8.80116C9.5 8.14216 10.1414 7.766 10.5909 8.16139L14.2273 11.3602C14.5909 11.6801 14.5909 12.3199 14.2273 12.6398Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class CaretRightIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}