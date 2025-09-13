import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-comments',
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
          d="M14.5 8.25C11.2322 8.25 8.5 10.6687 8.5 13.75C8.5 16.8313 11.2322 19.25 14.5 19.25C15.2721 19.25 16.0117 19.1162 16.6918 18.8716L19.3077 19.9615C19.484 20.035 19.6867 20.0016 19.8301 19.8755C19.9735 19.7494 20.0326 19.5527 19.9824 19.3684L19.3377 17.0047C20.0653 16.0972 20.5 14.9719 20.5 13.75C20.5 10.6687 17.7678 8.25 14.5 8.25Z"
          [attr.fill]="color"
        />
        <path
          d="M4 9.5C4 10.6863 4.45442 11.776 5.21364 12.6333L4.71519 14.461C4.64614 14.7142 4.61161 14.8408 4.64574 14.9207C4.67543 14.9903 4.73504 15.0427 4.80786 15.0633C4.89156 15.0868 5.01269 15.0364 5.25494 14.9354L7.29923 14.0837C7.36993 14.1117 7.44141 14.1385 7.51362 14.164C7.50459 14.0274 7.5 13.8893 7.5 13.75C7.5 10.0577 10.7211 7.2932 14.4133 7.2505C13.5076 5.61894 11.6475 4.5 9.5 4.5C6.46243 4.5 4 6.73858 4 9.5Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class CommentsIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}