import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-databoolean',
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
          d="M3.75 12.25C3.75 9.90279 5.65279 8 8 8C9.84191 8 11.4102 9.17172 12 10.8104C12.5899 9.17172 14.1581 8 16 8C18.3472 8 20.25 9.90279 20.25 12.25C20.25 14.5972 18.3472 16.5 16 16.5C14.1581 16.5 12.5899 15.3283 12 13.6896C11.4102 15.3283 9.84191 16.5 8 16.5C5.65279 16.5 3.75 14.5972 3.75 12.25ZM8 10C6.75736 10 5.75 11.0074 5.75 12.25C5.75 13.4926 6.75736 14.5 8 14.5C9.24264 14.5 10.25 13.4926 10.25 12.25C10.25 11.0074 9.24264 10 8 10Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class DataBooleanIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}