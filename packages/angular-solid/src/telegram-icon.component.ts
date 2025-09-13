import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-telegram',
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
          d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.4634 8.8458L15.373 15.8247C15.3078 16.2419 14.8373 16.4565 14.4795 16.2323L10.8289 13.9452C10.5042 13.7418 10.4576 13.2871 10.7342 13.022L13.7647 10.1176C13.7978 10.0859 13.7576 10.0333 13.7183 10.0568L9.32631 12.6854C9.06494 12.8418 8.75505 12.8963 8.45599 12.8385L6.86522 12.5306C6.29239 12.4198 6.21303 11.6324 6.75223 11.4095L15.2545 7.89418C15.8907 7.63113 16.5697 8.16559 16.4634 8.8458Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class TelegramIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}