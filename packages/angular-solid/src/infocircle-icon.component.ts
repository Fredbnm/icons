import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-infocircle',
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
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM11.75 8C11.75 7.86193 11.8619 7.75 12 7.75C12.1381 7.75 12.25 7.86193 12.25 8C12.25 8.13807 12.1381 8.25 12 8.25C11.8619 8.25 11.75 8.13807 11.75 8ZM12 6.25C12.9665 6.25 13.75 7.0335 13.75 8C13.75 8.9665 12.9665 9.75 12 9.75C11.0335 9.75 10.25 8.9665 10.25 8C10.25 7.0335 11.0335 6.25 12 6.25ZM11.416 12.624C11.0714 12.8538 10.6057 12.7607 10.376 12.416C10.1462 12.0714 10.2393 11.6057 10.584 11.376L11.3066 10.8942C12.1373 10.3404 13.25 10.9359 13.25 11.9343V15.75H14C14.4142 15.75 14.75 16.0858 14.75 16.5C14.75 16.9142 14.4142 17.25 14 17.25H12.5H11C10.5858 17.25 10.25 16.9142 10.25 16.5C10.25 16.0858 10.5858 15.75 11 15.75H11.75V12.4014L11.416 12.624Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class InfoCircleIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}