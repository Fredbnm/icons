import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-burgerclassic',
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
          d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6 20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6zM4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12 20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12zM5 17C4.44772 17 4 17.4477 4 18 4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18 20 17.4477 19.5523 17 19 17H5z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class BurgerClassicIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}