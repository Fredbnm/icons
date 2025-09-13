import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-lastupdates',
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
          d="M4.57868 8.49489L3.98631 7.46887C3.71017 6.99058 3.09858 6.8267 2.62028 7.10284C2.14199 7.37899 1.97812 7.99058 2.25426 8.46887L4.00426 11.5C4.2804 11.9783 4.89199 12.1421 5.37028 11.866L8.40137 10.116C8.87967 9.83984 9.04354 9.22825 8.7674 8.74996C8.49126 8.27167 7.87967 8.10779 7.40137 8.38393L6.62659 8.83125C7.7829 6.55763 10.1454 5 12.8703 5C16.7363 5 19.8703 8.13401 19.8703 12C19.8703 15.866 16.7363 19 12.8703 19C10.8683 19 9.06397 18.1609 7.78687 16.8124C7.40711 16.4114 6.77418 16.3942 6.37318 16.7739C5.97218 17.1537 5.95497 17.7866 6.33473 18.1876C7.97381 19.9183 10.2966 21 12.8703 21C17.8409 21 21.8703 16.9706 21.8703 12C21.8703 7.02944 17.8409 3 12.8703 3C9.14251 3 5.94545 5.26567 4.57868 8.49489Z"
          [attr.fill]="color"
        />
        <path
          d="M12.8703 7C13.4226 7 13.8703 7.44772 13.8703 8V11.5858L15.5774 13.2929C15.9679 13.6834 15.9679 14.3166 15.5774 14.7071C15.1869 15.0976 14.5537 15.0976 14.1632 14.7071L12.1632 12.7071C11.9756 12.5196 11.8703 12.2652 11.8703 12V8C11.8703 7.44772 12.318 7 12.8703 7Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class LastUpdatesIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}