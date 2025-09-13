import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-flag',
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
          d="M6.02736 14.8234C5.72854 14.9144 5.46063 15.0055 5.25 15.0808V20.75C5.25 21.1642 4.91421 21.5 4.5 21.5C4.08579 21.5 3.75 21.1642 3.75 20.75V4.05C3.75 3.73302 3.94928 3.45027 4.24779 3.34368L4.5 4.05C4.24779 3.34368 4.2477 3.34371 4.24779 3.34368L4.25061 3.34267L4.25668 3.34053L4.27826 3.33295C4.29675 3.32649 4.32336 3.31727 4.35736 3.30569C4.42533 3.28254 4.52297 3.24988 4.64442 3.21089C4.88692 3.13305 5.22634 3.02931 5.61539 2.9254C6.37564 2.72234 7.39213 2.5 8.25 2.5C9.66819 2.5 10.9907 2.93164 12.1842 3.3212L12.2327 3.337C13.4781 3.74341 14.5907 4.1 15.75 4.1C16.6175 4.1 17.8266 3.78823 18.6075 3.55128C19.3997 3.3109 20.25 3.88922 20.25 4.75945V14.0976C20.25 14.6221 19.9199 15.1066 19.398 15.2754C18.7266 15.4927 17.0386 16 15.75 16C14.3318 16 13.0093 15.5684 11.8158 15.1788L11.7673 15.163C10.5219 14.7566 9.40932 14.4 8.25 14.4C7.61259 14.4 6.76436 14.599 6.02736 14.8234Z"
          [attr.fill]="color"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      
    </svg>`,
  standalone: true
})
export class FlagIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}