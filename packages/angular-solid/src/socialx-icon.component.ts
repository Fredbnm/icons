import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-socialx',
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.0852 4.99109L17.2958 4.99364L18.5851 5.00926L17.7592 5.99933L13.7732 10.7775L20 19H15.6021L11.468 13.5409L6.91493 18.9989L6.70428 18.9963L5.41504 18.9807L6.24096 17.9906L10.747 12.589L5 5H9.39792L13.0523 9.82556L17.0852 4.99109ZM12.372 10.6411L8.88536 6.03704H7.08324L11.4274 11.7734L12.372 10.6411ZM12.1483 12.7254L16.1146 17.963H17.9168L13.0929 11.5931L12.1483 12.7254Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class SocialXIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}