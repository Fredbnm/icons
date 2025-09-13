import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-exclamationtriangle',
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
          d="M13.1641 3.49216C12.4236 3.16928 11.5764 3.16928 10.8359 3.49216C10.3296 3.7129 9.95473 4.12639 9.61376 4.60741C9.27563 5.08443 8.90264 5.73045 8.44102 6.52997L3.62607 14.8692C3.18769 15.6284 2.832 16.2445 2.5996 16.7511C2.36547 17.2615 2.19938 17.7762 2.26409 18.3092C2.35896 19.0908 2.79027 19.7887 3.43939 20.2378C3.87712 20.5406 4.40868 20.6491 4.98198 20.6997C5.55186 20.75 6.28161 20.75 7.187 20.75H16.813C17.7183 20.75 18.4481 20.75 19.018 20.6997C19.5913 20.6491 20.1228 20.5406 20.5606 20.2378C21.2097 19.7887 21.641 19.0908 21.7359 18.3092C21.8006 17.7762 21.6345 17.2615 21.4004 16.7511C21.168 16.2445 20.8123 15.6285 20.374 14.8693L15.5589 6.52993C15.0973 5.73044 14.7243 5.08442 14.3862 4.60741C14.0452 4.12639 13.6703 3.7129 13.1641 3.49216ZM10.7556 9.40011C10.6868 8.64895 11.2636 8 12 8C12.7364 8 13.3132 8.64895 13.2444 9.40011L12.7503 13.5499C12.714 13.9467 12.389 14.25 12 14.25C11.611 14.25 11.286 13.9467 11.2497 13.5499L10.7556 9.40011ZM13.25 16.75C13.25 17.4404 12.6904 18 12 18C11.3096 18 10.75 17.4404 10.75 16.75C10.75 16.0596 11.3096 15.5 12 15.5C12.6904 15.5 13.25 16.0596 13.25 16.75Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class ExclamationTriangleIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}