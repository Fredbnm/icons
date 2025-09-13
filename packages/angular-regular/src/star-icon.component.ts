import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-star',
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
          d="M10.8456 3.82193C11.2726 2.79532 12.7269 2.79532 13.1539 3.82193L14.8969 8.01248L19.4209 8.37517C20.5292 8.46402 20.9786 9.84716 20.1342 10.5705L16.6874 13.5231L17.7404 17.9378C17.9984 19.0193 16.8219 19.8741 15.873 19.2946L11.9998 16.9288L8.12656 19.2946C7.17769 19.8741 6.00113 19.0193 6.25911 17.9378L7.31218 13.5231L3.86533 10.5705C3.02091 9.84716 3.47032 8.46402 4.57864 8.37517L9.10268 8.01248L10.8456 3.82193ZM11.9998 4.95296L10.429 8.72952C10.249 9.16231 9.842 9.45802 9.37476 9.49548L5.29766 9.82234L8.40398 12.4832C8.75997 12.7882 8.91543 13.2667 8.80667 13.7226L7.85764 17.7012L11.3482 15.5691C11.7482 15.3248 12.2513 15.3248 12.6513 15.5691L16.1419 17.7012L15.1929 13.7226C15.0841 13.2667 15.2396 12.7882 15.5956 12.4832L18.7019 9.82234L14.6248 9.49548C14.1576 9.45802 13.7505 9.16231 13.5705 8.72952L11.9998 4.95296Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class StarIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}