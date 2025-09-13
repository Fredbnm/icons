import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-sidebar',
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
          d="M18.4291 3C20.5594 3 22.2863 4.7269 22.2863 6.85714V17.1429C22.2863 19.2731 20.5594 21 18.4291 21H5.57199C5.30571 21 5.04573 20.973 4.79464 20.9216C3.037 20.562 1.71484 19.0068 1.71484 17.1429V6.85714C1.71484 4.7269 3.44175 3 5.57199 3H18.4291ZM10.7148 5.57143H18.4291C19.1392 5.57143 19.7148 6.14706 19.7148 6.85714V17.1429C19.7148 17.8529 19.1392 18.4286 18.4291 18.4286H10.7148V5.57143ZM7.50056 5.57143H4.99635C4.91906 5.57143 4.84336 5.57825 4.76983 5.59132C4.49184 5.66219 4.28627 5.91423 4.28627 6.21429C4.28627 6.56933 4.57409 6.85714 4.92913 6.85714H7.50056C7.8556 6.85714 8.14342 6.56933 8.14342 6.21429C8.14342 5.85925 7.8556 5.57143 7.50056 5.57143ZM4.92913 8.14286C4.57409 8.14286 4.28627 8.43067 4.28627 8.78571C4.28627 9.14075 4.57409 9.42857 4.92913 9.42857H7.50056C7.8556 9.42857 8.14342 9.14075 8.14342 8.78571C8.14342 8.43067 7.8556 8.14286 7.50056 8.14286H4.92913ZM4.28627 11.3571C4.28627 11.0021 4.57409 10.7143 4.92913 10.7143H7.50056C7.8556 10.7143 8.14342 11.0021 8.14342 11.3571C8.14342 11.7122 7.8556 12 7.50056 12H4.92913C4.57409 12 4.28627 11.7122 4.28627 11.3571Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class SidebarIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}