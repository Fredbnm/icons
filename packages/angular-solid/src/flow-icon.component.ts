import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-flow',
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
          d="M9.00039 5.125C9.00039 4.50368 9.50407 4 10.1254 4H13.8754C14.4967 4 15.0004 4.50368 15.0004 5.125V8.875C15.0004 9.49632 14.4967 10 13.8754 10H10.1254C9.50407 10 9.00039 9.49632 9.00039 8.875V5.125Z"
          [attr.fill]="color"
        />
        <path
          d="M4.40039 14.875C4.40039 14.2537 4.90407 13.75 5.52539 13.75H9.27539C9.89671 13.75 10.4004 14.2537 10.4004 14.875V18.625C10.4004 19.2463 9.89671 19.75 9.27539 19.75H5.52539C4.90407 19.75 4.40039 19.2463 4.40039 18.625V14.875Z"
          [attr.fill]="color"
        />
        <path
          d="M14.6254 13.75C14.0041 13.75 13.5004 14.2537 13.5004 14.875V18.625C13.5004 19.2463 14.0041 19.75 14.6254 19.75H18.3754C18.9967 19.75 19.5004 19.2463 19.5004 18.625V14.875C19.5004 14.2537 18.9967 13.75 18.3754 13.75H14.6254Z"
          [attr.fill]="color"
        />
        <path
          d="M15.5004 11.05H12.7504V10.5H11.2504V11.05H8.50039C7.53389 11.05 6.75039 11.8335 6.75039 12.8V13.3H8.25039V12.8C8.25039 12.6619 8.36232 12.55 8.50039 12.55H15.5004C15.6385 12.55 15.7504 12.6619 15.7504 12.8V13.3H17.2504V12.8C17.2504 11.8335 16.4669 11.05 15.5004 11.05Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class FlowIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}