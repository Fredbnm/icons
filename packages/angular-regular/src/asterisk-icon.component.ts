import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-asterisk',
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
          d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V10.7008L15.0887 9.35048C15.4474 9.14337 15.9061 9.26628 16.1132 9.625C16.3204 9.98372 16.1974 10.4424 15.8387 10.6495L13.5 11.9998L15.8394 13.3505C16.1981 13.5576 16.321 14.0163 16.1139 14.375C15.9068 14.7337 15.4481 14.8566 15.0894 14.6495L12.75 13.2988V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16L11.25 13.2988L8.91053 14.6495C8.55181 14.8566 8.09311 14.7337 7.88601 14.375C7.6789 14.0163 7.80181 13.5576 8.16053 13.3505L10.5 11.9998L8.16121 10.6495C7.80249 10.4424 7.67958 9.98372 7.88669 9.625C8.09379 9.26628 8.55249 9.14337 8.91121 9.35048L11.25 10.7008L11.25 8C11.25 7.58579 11.5858 7.25 12 7.25Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class AsteriskIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}