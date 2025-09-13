import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-arrowreply',
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
          d="M10.2964 6.8885L4.83343 11.1808C4.57865 11.381 4.57865 11.7669 4.83343 11.9671L10.2964 16.2594C10.6582 16.5437 11.1795 16.2296 11.0972 15.7768L10.7418 13.8222C15.7581 12.6184 17.8499 15.3163 18.6562 17.0574C18.7736 17.311 19.2705 17.2619 19.2955 16.9836C19.9412 9.7827 15.2136 8.7401 10.7252 9.41704L11.0972 7.3711C11.1795 6.91835 10.6582 6.60419 10.2964 6.8885Z"
          [attr.fill]="color"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      
    </svg>`,
  standalone: true
})
export class ArrowReplyIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}