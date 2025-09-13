import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-signinalt',
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
          d="M8.626 7.53568C9.75403 6.4303 11.2968 5.75 13.0001 5.75C16.4518 5.75 19.2501 8.54822 19.2501 12C19.2501 15.4518 16.4518 18.25 13.0001 18.25C11.2968 18.25 9.75403 17.5697 8.626 16.4643C8.33015 16.1744 7.8553 16.1792 7.56539 16.4751C7.27549 16.7709 7.2803 17.2458 7.57615 17.5357C8.97319 18.9047 10.8887 19.75 13.0001 19.75C17.2803 19.75 20.7501 16.2802 20.7501 12C20.7501 7.71979 17.2803 4.25 13.0001 4.25C10.8887 4.25 8.97319 5.09533 7.57615 6.46432C7.2803 6.75423 7.27549 7.22908 7.56539 7.52492C7.8553 7.82077 8.33015 7.82559 8.626 7.53568Z"
          [attr.fill]="color"
        />
        <path
          d="M12.5303 8.46967C12.2374 8.17678 11.7626 8.17678 11.4697 8.46967C11.1768 8.76256 11.1768 9.23744 11.4697 9.53033L13.1893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H13.1893L11.4697 14.4697C11.1768 14.7626 11.1768 15.2374 11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L15.5303 12.5303C15.8232 12.2374 15.8232 11.7626 15.5303 11.4697L12.5303 8.46967Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class SigninAltIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}