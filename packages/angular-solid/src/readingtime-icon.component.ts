import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-readingtime',
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
          d="M1.75 4.25C1.75 3.83579 2.08579 3.5 2.5 3.5H20.5C20.9142 3.5 21.25 3.83579 21.25 4.25 21.25 4.66421 20.9142 5 20.5 5H2.5C2.08579 5 1.75 4.66421 1.75 4.25zM1.75 9.25C1.75 8.83579 2.08579 8.5 2.5 8.5H8C8.41421 8.5 8.75 8.83579 8.75 9.25 8.75 9.66421 8.41421 10 8 10H2.5C2.08579 10 1.75 9.66421 1.75 9.25zM1.75 14.25C1.75 13.8358 2.08579 13.5 2.5 13.5H8C8.41421 13.5 8.75 13.8358 8.75 14.25 8.75 14.6642 8.41421 15 8 15H2.5C2.08579 15 1.75 14.6642 1.75 14.25zM1.75 19.25C1.75 18.8358 2.08579 18.5 2.5 18.5H8C8.41421 18.5 8.75 18.8358 8.75 19.25 8.75 19.6642 8.41421 20 8 20H2.5C2.08579 20 1.75 19.6642 1.75 19.25z"
          [attr.fill]="color"
        />
        <path
          d="M9.75 14.25C9.75 10.7982 12.5482 8 16 8C19.4518 8 22.25 10.7982 22.25 14.25C22.25 17.7018 19.4518 20.5 16 20.5C12.5482 20.5 9.75 17.7018 9.75 14.25ZM16 11C15.4655 11 14.9393 11.1318 14.468 11.3838C13.9966 11.6357 13.5947 12 13.2977 12.4444C13.0008 12.8888 12.818 13.3996 12.7656 13.9314C12.7133 14.4633 12.7929 14.9999 12.9974 15.4937C13.2019 15.9875 13.5251 16.4232 13.9382 16.7623C14.3514 17.1013 14.8418 17.3333 15.366 17.4376C15.8902 17.5418 16.432 17.5152 16.9434 17.3601C17.4549 17.2049 17.9202 16.926 18.2981 16.5481L16 14.25V11Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class ReadingTimeIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}