import { Component, Input } from '@angular/core';
import { IconProps } from './types';

@Component({
  selector: 'stash-kanban',
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
          d="M8.22581 7.35484C7.74478 7.35484 7.35484 7.74478 7.35484 8.22581V15.7742C7.35484 16.2552 7.74478 16.6452 8.22581 16.6452C8.70683 16.6452 9.09677 16.2552 9.09677 15.7742V8.22581C9.09677 7.74478 8.70683 7.35484 8.22581 7.35484Z"
          [attr.fill]="color"
        />
        <path
          d="M11.129 8.22581C11.129 7.74478 11.519 7.35484 12 7.35484C12.481 7.35484 12.871 7.74478 12.871 8.22581V13.4516C12.871 13.9326 12.481 14.3226 12 14.3226C11.519 14.3226 11.129 13.9326 11.129 13.4516V8.22581Z"
          [attr.fill]="color"
        />
        <path
          d="M15.7742 7.35484C15.2932 7.35484 14.9032 7.74478 14.9032 8.22581V11.129C14.9032 11.6101 15.2932 12 15.7742 12C16.2552 12 16.6452 11.6101 16.6452 11.129V8.22581C16.6452 7.74478 16.2552 7.35484 15.7742 7.35484Z"
          [attr.fill]="color"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.51613 3C5.46966 3 3 5.46966 3 8.51613V15.4839C3 18.5303 5.46966 21 8.51613 21H15.4839C18.5303 21 21 18.5303 21 15.4839V8.51613C21 5.46966 18.5303 3 15.4839 3H8.51613ZM4.74194 8.51613C4.74194 6.4317 6.4317 4.74194 8.51613 4.74194H15.4839C17.5683 4.74194 19.2581 6.4317 19.2581 8.51613V15.4839C19.2581 17.5683 17.5683 19.2581 15.4839 19.2581H8.51613C6.4317 19.2581 4.74194 17.5683 4.74194 15.4839V8.51613Z"
          [attr.fill]="color"
        />
      
    </svg>`,
  standalone: true
})
export class KanbanIconComponent implements IconProps {
  @Input() color: string = 'currentColor';
  @Input() width: string | number = '24';
  @Input() height: string | number = '24';
  @Input() className?: string;
  @Input() style?: { [key: string]: any };
}