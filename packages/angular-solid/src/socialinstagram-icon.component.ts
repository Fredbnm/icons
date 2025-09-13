import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-socialinstagram',
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
          d="M7.58333 12C7.58333 9.56072 9.56074 7.58331 12 7.58331C14.4393 7.58331 16.4167 9.56072 16.4167 12C16.4167 14.4392 14.4393 16.4166 12 16.4166C9.56074 16.4166 7.58333 14.4392 7.58333 12ZM12 9.08331C10.3892 9.08331 9.08333 10.3891 9.08333 12C9.08333 13.6108 10.3892 14.9166 12 14.9166C13.6108 14.9166 14.9167 13.6108 14.9167 12C14.9167 10.3891 13.6108 9.08331 12 9.08331Z"
          [attr.fill]="color"
        />
        <path
          d="M16.6667 8.33331C17.219 8.33331 17.6667 7.8856 17.6667 7.33331C17.6667 6.78103 17.219 6.33331 16.6667 6.33331C16.1144 6.33331 15.6667 6.78103 15.6667 7.33331C15.6667 7.8856 16.1144 8.33331 16.6667 8.33331Z"
          [attr.fill]="color"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.25 8.66667C3.25 5.67512 5.67512 3.25 8.66667 3.25H15.3333C18.3249 3.25 20.75 5.67512 20.75 8.66667V15.3333C20.75 18.3249 18.3249 20.75 15.3333 20.75H8.66667C5.67512 20.75 3.25 18.3249 3.25 15.3333V8.66667ZM8.66667 4.75C6.50355 4.75 4.75 6.50355 4.75 8.66667V15.3333C4.75 17.4964 6.50355 19.25 8.66667 19.25H15.3333C17.4964 19.25 19.25 17.4964 19.25 15.3333V8.66667C19.25 6.50355 17.4964 4.75 15.3333 4.75H8.66667Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class SocialInstagramIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}