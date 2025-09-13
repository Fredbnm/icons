import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-flask',
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
          d="M14.7232 1.6993C14.7232 1.07027 15.2332 0.560333 15.8622 0.560333C16.4912 0.560333 17.0012 1.07027 17.0012 1.6993C17.0012 2.32833 16.4912 2.83827 15.8622 2.83827C15.2332 2.83827 14.7232 2.32833 14.7232 1.6993Z"
          [attr.fill]="color"
        />
        <path
          d="M11.9648 3.46114C11.9648 2.8321 12.4747 2.32217 13.1038 2.32217C13.7328 2.32217 14.2427 2.8321 14.2427 3.46114C14.2427 4.09017 13.7328 4.6001 13.1038 4.6001C12.4747 4.6001 11.9648 4.09017 11.9648 3.46114Z"
          [attr.fill]="color"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.80934 6.07719C7.80934 5.59067 8.20374 5.19627 8.69026 5.19627H15.3105C15.797 5.19627 16.1914 5.59067 16.1914 6.07719C16.1914 6.55432 15.8121 6.94286 15.3386 6.95767L14.9924 10.9244C14.9683 11.2001 15.0226 11.4769 15.1491 11.7231L18.3022 17.8591C18.9808 19.1796 18.0219 20.7503 16.5373 20.7503H7.46349C5.97883 20.7503 5.02002 19.1796 5.69858 17.8591L8.85164 11.7231C8.97812 11.4769 9.03247 11.2001 9.00841 10.9244L8.66222 6.95767C8.18868 6.94286 7.80934 6.55432 7.80934 6.07719ZM10.4308 6.95811H13.57L13.2372 10.7712C13.1843 11.3777 13.3038 11.9868 13.5821 12.5283L14.5011 14.3169H9.49963L10.4187 12.5283C10.6969 11.9868 10.8165 11.3777 10.7636 10.7712L10.4308 6.95811Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class FlaskIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}