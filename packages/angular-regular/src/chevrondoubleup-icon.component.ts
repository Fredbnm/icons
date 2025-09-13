import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-chevrondoubleup',
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
          d="M7.46967 17.591C7.17678 17.2981 7.17678 16.8232 7.46967 16.5303L12 12L16.5303 16.5303C16.8232 16.8232 16.8232 17.2981 16.5303 17.591C16.2374 17.8839 15.7626 17.8839 15.4697 17.591L12 14.1213L8.53033 17.591C8.23744 17.8839 7.76256 17.8839 7.46967 17.591Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M7.46967 11.7803C7.17678 11.4874 7.17678 11.0126 7.46967 10.7197L12 6.18933L16.5303 10.7197C16.8232 11.0126 16.8232 11.4874 16.5303 11.7803C16.2374 12.0732 15.7626 12.0732 15.4697 11.7803L12 8.31065L8.53033 11.7803C8.23744 12.0732 7.76256 12.0732 7.46967 11.7803Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class ChevronDoubleUpIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}