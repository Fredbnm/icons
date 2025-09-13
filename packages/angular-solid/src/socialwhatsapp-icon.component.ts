import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-socialwhatsapp',
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
          d="M12 2.92828C6.98981 2.92828 2.92825 6.98985 2.92825 12C2.92825 13.7972 3.45158 15.4741 4.35411 16.8843L2.81159 20.4524C2.69634 20.719 2.74537 21.0281 2.93743 21.246C3.1295 21.4638 3.43007 21.5512 3.709 21.4703L8.10449 20.195C9.28557 20.7573 10.607 21.0718 12 21.0718C17.0102 21.0718 21.0718 17.0102 21.0718 12C21.0718 6.98985 17.0102 2.92828 12 2.92828ZM13.3722 14.7532C12.9996 14.9732 12.1851 15.0401 10.6362 13.4911C9.08723 11.9421 9.15409 11.1276 9.37409 10.7551C9.93437 10.6985 10.4708 10.3232 10.9695 9.8244C11.3377 9.4562 11.0392 8.56078 10.3029 7.82439C9.56646 7.08799 8.67104 6.78951 8.30283 7.15771C5.93127 9.52928 7.11864 12.6402 9.30284 14.8245C11.5172 17.0388 14.5412 18.2529 16.9696 15.8245C17.3378 15.4562 17.0393 14.5608 16.3029 13.8244C15.5665 13.088 14.6711 12.7896 14.3029 13.1578C13.8041 13.6565 13.4288 14.1929 13.3722 14.7532Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class SocialWhatsappIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}