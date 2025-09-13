import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-heart',
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
          d="M12.4036 6.14504C12.1742 6.34465 11.8213 6.34465 11.5919 6.14508C9.80999 4.59526 7.16253 4.53708 5.34303 6.47366C1.359 11.5192 7.14219 15.9711 10.9581 18.6685C11.5831 19.1103 12.4123 19.1104 13.0377 18.6692C16.8812 15.9579 22.6386 11.5192 18.6525 6.47366C16.8351 4.53711 14.1847 4.59526 12.4036 6.14504Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class HeartIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}