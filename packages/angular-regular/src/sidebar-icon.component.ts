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
          d="M18.4291 21C20.5594 21 22.2863 19.2731 22.2863 17.1429V6.85714C22.2863 4.7269 20.5594 3 18.4291 3H5.57199C3.44175 3 1.71484 4.7269 1.71484 6.85714V17.1429C1.71484 19.2731 3.44175 21 5.57199 21H18.4291ZM18.4291 4.92857H10.7148L10.7148 19.0714H18.4291C19.4943 19.0714 20.3577 18.208 20.3577 17.1429V6.85714C20.3577 5.79202 19.4943 4.92857 18.4291 4.92857ZM4.28627 6.21429C4.28627 5.85925 4.57409 5.57143 4.92913 5.57143H7.50056C7.8556 5.57143 8.14342 5.85925 8.14342 6.21429C8.14342 6.56933 7.8556 6.85714 7.50056 6.85714H4.92913C4.57409 6.85714 4.28627 6.56933 4.28627 6.21429ZM4.92913 8.14286C4.57409 8.14286 4.28627 8.43067 4.28627 8.78571C4.28627 9.14075 4.57409 9.42857 4.92913 9.42857H7.50056C7.8556 9.42857 8.14342 9.14075 8.14342 8.78571C8.14342 8.43067 7.8556 8.14286 7.50056 8.14286H4.92913ZM4.28627 11.3571C4.28627 11.0021 4.57409 10.7143 4.92913 10.7143H7.50056C7.8556 10.7143 8.14342 11.0021 8.14342 11.3571C8.14342 11.7122 7.8556 12 7.50056 12H4.92913C4.57409 12 4.28627 11.7122 4.28627 11.3571Z"
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