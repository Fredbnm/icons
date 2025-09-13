import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-headphones',
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
          d="M5.25818 11.6736C5.42844 8.09728 8.38192 5.25 12.0004 5.25C15.5743 5.25 18.4994 8.02741 18.7351 11.5415C18.7571 11.5466 18.7792 11.552 18.8012 11.5579C20.7532 12.081 21.9116 14.0874 21.3886 16.0394L21.3415 16.215C20.8185 18.167 18.812 19.3254 16.86 18.8024C15.878 18.5392 15.2952 17.5298 15.5583 16.5477L16.5465 12.8597C16.6608 12.4332 16.9158 12.0821 17.2481 11.8428C17.165 9.01601 14.8473 6.75 12.0004 6.75C9.22812 6.75 6.95769 8.89882 6.76384 11.6218C7.28942 11.828 7.71358 12.2724 7.87092 12.8597L8.85914 16.5477C9.12228 17.5298 8.53948 18.5392 7.55742 18.8024C5.60542 19.3254 3.599 18.167 3.07597 16.215L3.02891 16.0394C2.53871 14.21 3.52543 12.3327 5.25818 11.6736Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class HeadphonesIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}