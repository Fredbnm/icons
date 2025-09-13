import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-cloud',
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
          d="M11 5.75C8.3265 5.75 6.11873 7.74906 5.79181 10.3336L5.73303 10.7983L5.28966 10.9494C3.81151 11.4531 2.75 12.8536 2.75 14.5C2.75 16.5711 4.42893 18.25 6.5 18.25H17.5C19.5711 18.25 21.25 16.5711 21.25 14.5C21.25 12.4289 19.5711 10.75 17.5 10.75C17.3365 10.75 17.1757 10.7604 17.0183 10.7806L16.2983 10.8727L16.1827 10.1561C15.7795 7.65799 13.6118 5.75 11 5.75ZM4.37564 9.69779C4.98282 6.59273 7.71729 4.25 11 4.25C14.1231 4.25 16.7497 6.37034 17.5208 9.25004C20.4107 9.26123 22.75 11.6074 22.75 14.5C22.75 17.3995 20.3995 19.75 17.5 19.75H6.5C3.6005 19.75 1.25 17.3995 1.25 14.5C1.25 12.3556 2.53522 10.5131 4.37564 9.69779Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class CloudIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}