import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-contentshare',
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
          d="M12.165 7.50531C11.9592 6.37345 13.2625 5.58804 14.1671 6.2988L19.63 10.5911C20.267 11.0916 20.267 12.0564 19.63 12.5569L14.1671 16.8492C13.2625 17.56 11.9592 16.7746 12.165 15.6427L12.3895 14.4076C10.4186 14.0648 9.05412 14.4178 8.10484 14.9806C7.02882 15.6187 6.38965 16.584 6.02444 17.3726L5.35607 17.0631L6.02444 17.3726C5.77534 17.9105 5.21699 17.999 4.90892 17.9657C4.6075 17.9331 4.01682 17.7113 3.95758 17.0506C3.61953 13.2808 4.68229 10.8949 6.65683 9.6166C8.27338 8.57003 10.3526 8.37188 12.3551 8.55086L12.165 7.50531ZM13.7587 7.88555L14.0128 9.28292C14.0561 9.52113 13.9817 9.7656 13.8131 9.93936C13.6445 10.1131 13.4024 10.1948 13.163 10.1587C10.974 9.82855 8.89973 9.95145 7.47202 10.8758C6.32459 11.6186 5.44575 12.9841 5.39684 15.4842C5.86114 14.8413 6.49146 14.1934 7.3398 13.6904C8.7845 12.8338 10.7671 12.4531 13.4333 13.093C13.8203 13.1859 14.0674 13.5649 13.9962 13.9565L13.7587 15.2624L18.4531 11.574L13.7587 7.88555Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class ContentShareIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}