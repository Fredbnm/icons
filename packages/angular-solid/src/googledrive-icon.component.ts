import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-googledrive',
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
          d="M11.2962 5.25H12.8638L12.0942 6.54959L11.2962 5.25ZM15.1915 6.22574L19.0523 13.4517H16.3328L13.5734 8.95823L15.1915 6.22574ZM19.5817 15.9517C19.5675 15.9821 19.5524 16.0122 19.5365 16.042L18.786 17.4466L17.868 15.9517H19.5817ZM19.5249 20.7044C19.8881 20.4502 20.1959 20.113 20.4141 19.7046L21.7415 17.2201C22.4195 15.9512 22.4195 14.4488 21.7415 13.1799L17.2308 4.73763C16.5648 3.49114 15.2363 2.75 13.8345 2.75H10.1655C8.7637 2.75 7.43515 3.49114 6.76916 4.73763L2.25851 13.1799C1.5805 14.4488 1.5805 15.9512 2.25851 17.2201L3.58594 19.7046C4.10713 20.6801 5.13966 21.25 6.21769 21.25H17.7823C18.2916 21.25 18.7907 21.1228 19.2306 20.8857C19.2822 20.863 19.3329 20.8365 19.3823 20.8062C19.4328 20.7751 19.4804 20.7411 19.5249 20.7044ZM16.6527 18.75H7.77506L9.43211 15.9517H14.9343L16.6527 18.75ZM5.41672 17.8261L4.46351 16.042C4.44756 16.0122 4.4325 15.9821 4.41834 15.9517H6.52667L5.41672 17.8261ZM4.94773 13.4517L8.87975 6.09244L10.654 8.9817L8.00707 13.4517H4.94773ZM12.1332 11.3903L13.399 13.4517H10.9125L12.1332 11.3903Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class GoogleDriveIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}