import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-angleup',
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
          d="M11.3638 10.1636C11.7153 9.81213 12.2851 9.81213 12.6366 10.1636L15.0366 12.5636C15.3881 12.9151 15.3881 13.4849 15.0366 13.8364C14.6851 14.1879 14.1153 14.1879 13.7638 13.8364L12.0002 12.0728L10.2366 13.8364C9.88512 14.1879 9.31527 14.1879 8.9638 13.8364C8.61233 13.4849 8.61233 12.9151 8.9638 12.5636L11.3638 10.1636Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class AngleUpIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}