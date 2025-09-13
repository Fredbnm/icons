import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-arrowretry',
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
          d="M11.8959 18C11.8959 18.4142 11.5601 18.75 11.1459 18.75C7.35449 18.75 4.25 15.7448 4.25 12C4.25 8.25519 7.35449 5.25 11.1459 5.25C14.2505 5.25 16.8946 7.26509 17.7506 10.0513L18.3544 9.0302C18.5653 8.67367 19.0252 8.55557 19.3818 8.76642C19.7383 8.97727 19.8564 9.43722 19.6456 9.79376L18.0159 12.5494C17.8081 12.9007 17.3576 13.0214 17.0021 12.821L14.1794 11.23C13.8185 11.0266 13.6909 10.5692 13.8943 10.2084C14.0977 9.84756 14.5551 9.71992 14.9159 9.9233L16.3883 10.7532C15.8145 8.46512 13.697 6.75 11.1459 6.75C8.14874 6.75 5.75 9.11739 5.75 12C5.75 14.8826 8.14874 17.25 11.1459 17.25C11.5601 17.25 11.8959 17.5858 11.8959 18Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class ArrowRetryIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}