import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-boxopen',
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
          d="M3.89879 4.52704C4.15711 4.13955 4.61868 3.93958 5.07805 4.01614L12 5.1698L18.922 4.01614C19.3813 3.93958 19.8429 4.13955 20.1012 4.52704L21.8005 7.07597C22.2486 7.74809 21.9065 8.66166 21.1272 8.8742L15.8079 10.3249C15.3299 10.4553 14.8214 10.2742 14.5334 9.87104L12 6.32422L9.46656 9.87104C9.17862 10.2742 8.67008 10.4553 8.19215 10.3249L2.8728 8.8742C2.09348 8.66166 1.75142 7.74809 2.19949 7.07597L3.89879 4.52704Z"
          [attr.fill]="color"
        />
        <path
          d="M3.41991 9.86248V15.9252C3.41991 16.4536 3.77018 16.9179 4.27825 17.0631L12.3021 19.3556L19.7447 17.0656C20.2412 16.9128 20.5801 16.454 20.5801 15.9345V9.86248L19.3966 10.2175V15.9345L12.8876 17.9373V10.4542C12.8876 10.1274 12.6227 9.86248 12.2959 9.86248C11.9691 9.86248 11.7041 10.1274 11.7041 10.4542V17.954L4.60337 15.9252V10.2175L3.41991 9.86248Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class BoxOpenIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}