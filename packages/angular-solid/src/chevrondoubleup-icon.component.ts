import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-chevrondoubleup',
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
          d="M7.11636 18.6517C6.62821 18.1635 6.62821 17.372 7.11636 16.8839L12.0002 12L16.8841 16.8839C17.3723 17.372 17.3723 18.1635 16.8841 18.6517C16.396 19.1398 15.6045 19.1398 15.1164 18.6517L12.0002 15.5355L8.88413 18.6517C8.39597 19.1398 7.60452 19.1398 7.11636 18.6517Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.11636 11.6339C6.62821 11.1457 6.62821 10.3543 7.11636 9.86612L12.0002 4.98224L16.8841 9.86612C17.3723 10.3543 17.3723 11.1457 16.8841 11.6339C16.396 12.122 15.6045 12.122 15.1164 11.6339L12.0002 8.51777L8.88413 11.6339C8.39597 12.122 7.60452 12.122 7.11636 11.6339Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class ChevronDoubleUpIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}