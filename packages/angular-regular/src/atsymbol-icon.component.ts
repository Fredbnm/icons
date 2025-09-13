import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-atsymbol',
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
          d="M3.25 11.4667C3.25 6.92873 6.92873 3.25 11.4667 3.25H13.6C17.5488 3.25 20.75 6.45116 20.75 10.4V13.6667C20.75 15.3695 19.3695 16.75 17.6667 16.75C16.5043 16.75 15.4922 16.1069 14.9668 15.157C14.1675 16.127 12.9999 16.75 11.6667 16.75C9.16731 16.75 7.25 14.5606 7.25 12C7.25 9.43941 9.16731 7.25 11.6667 7.25C12.8001 7.25 13.8138 7.70026 14.5833 8.4312V8C14.5833 7.58579 14.9191 7.25 15.3333 7.25C15.7475 7.25 16.0833 7.58579 16.0833 8V13.6667C16.0833 14.5411 16.7922 15.25 17.6667 15.25C18.5411 15.25 19.25 14.5411 19.25 13.6667V10.4C19.25 7.27959 16.7204 4.75 13.6 4.75H11.4667C7.75715 4.75 4.75 7.75715 4.75 11.4667V12C4.75 16.0041 7.99594 19.25 12 19.25H16.6667C17.0809 19.25 17.4167 19.5858 17.4167 20C17.4167 20.4142 17.0809 20.75 16.6667 20.75H12C7.16751 20.75 3.25 16.8325 3.25 12V11.4667ZM14.5833 12C14.5833 10.1423 13.2174 8.75 11.6667 8.75C10.1159 8.75 8.75 10.1423 8.75 12C8.75 13.8577 10.1159 15.25 11.6667 15.25C13.2174 15.25 14.5833 13.8577 14.5833 12Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class AtSymbolIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}