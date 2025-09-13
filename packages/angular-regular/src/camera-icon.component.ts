import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-camera',
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9375 13.125C15.9375 15.2996 14.1746 17.0625 12 17.0625C9.82538 17.0625 8.0625 15.2996 8.0625 13.125C8.0625 10.9504 9.82538 9.1875 12 9.1875C14.1746 9.1875 15.9375 10.9504 15.9375 13.125ZM14.25 13.125C14.25 14.3676 13.2426 15.375 12 15.375C10.7574 15.375 9.75 14.3676 9.75 13.125C9.75 11.8824 10.7574 10.875 12 10.875C13.2426 10.875 14.25 11.8824 14.25 13.125Z"
          [attr.fill]="color"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.54967 5.66349L7.3125 6.375H6.375C4.51104 6.375 3 7.88604 3 9.75V16.5C3 18.364 4.51104 19.875 6.375 19.875H17.625C19.489 19.875 21 18.364 21 16.5V9.75C21 7.88604 19.489 6.375 17.625 6.375H16.6875L16.4503 5.66349C16.1441 4.74472 15.2843 4.125 14.3158 4.125H9.68421C8.71574 4.125 7.85593 4.74472 7.54967 5.66349ZM17.625 8.0625H6.375C5.44302 8.0625 4.6875 8.81802 4.6875 9.75V16.5C4.6875 17.432 5.44302 18.1875 6.375 18.1875H17.625C18.557 18.1875 19.3125 17.432 19.3125 16.5V9.75C19.3125 8.81802 18.557 8.0625 17.625 8.0625Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class CameraIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}