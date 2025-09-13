import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-share',
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
          d="M17.5 3.25C19.0188 3.25 20.25 4.48122 20.25 6C20.25 7.51878 19.0188 8.75 17.5 8.75C16.9672 8.75 16.4698 8.59849 16.0486 8.33621C16.0203 8.35467 15.9909 8.37189 15.9603 8.38775L9.24692 11.8688C9.24897 11.9123 9.25 11.956 9.25 12C9.25 12.0443 9.24895 12.0884 9.24688 12.1322C9.2512 12.1347 9.25551 12.1372 9.2598 12.1397L15.676 15.9419C16.1614 15.5114 16.8002 15.25 17.5 15.25C19.0188 15.25 20.25 16.4812 20.25 18C20.25 19.5188 19.0188 20.75 17.5 20.75C15.9812 20.75 14.75 19.5188 14.75 18C14.75 17.9075 14.7546 17.8161 14.7635 17.7259L8.42124 13.9676C7.92554 14.4517 7.24761 14.75 6.5 14.75C4.98122 14.75 3.75 13.5188 3.75 12C3.75 10.4812 4.98122 9.25 6.5 9.25C7.25151 9.25 7.93261 9.55145 8.42898 10.04L14.8436 6.71393C14.7825 6.48626 14.75 6.24693 14.75 6C14.75 4.48122 15.9812 3.25 17.5 3.25Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class ShareIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}