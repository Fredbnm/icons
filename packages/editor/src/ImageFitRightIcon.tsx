import * as React from 'react';
import { IconProps } from './types';

export const ImageFitRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.25 6C4.25 5.58579 4.58579 5.25 5 5.25H19C19.4142 5.25 19.75 5.58579 19.75 6C19.75 6.41421 19.4142 6.75 19 6.75H5C4.58579 6.75 4.25 6.41421 4.25 6ZM4.25 10C4.25 9.58579 4.58579 9.25 5 9.25H10.8C11.2142 9.25 11.55 9.58579 11.55 10C11.55 10.4142 11.2142 10.75 10.8 10.75H5C4.58579 10.75 4.25 10.4142 4.25 10ZM13.25 10C13.25 9.58579 13.5858 9.25 14 9.25H19C19.4142 9.25 19.75 9.58579 19.75 10V14C19.75 14.4142 19.4142 14.75 19 14.75H14C13.5858 14.75 13.25 14.4142 13.25 14V10ZM14.75 10.75V13.25H18.25V10.75H14.75ZM4.25 14C4.25 13.5858 4.58579 13.25 5 13.25H10.8C11.2142 13.25 11.55 13.5858 11.55 14C11.55 14.4142 11.2142 14.75 10.8 14.75H5C4.58579 14.75 4.25 14.4142 4.25 14ZM4.25 18C4.25 17.5858 4.58579 17.25 5 17.25H19C19.4142 17.25 19.75 17.5858 19.75 18C19.75 18.4142 19.4142 18.75 19 18.75H5C4.58579 18.75 4.25 18.4142 4.25 18Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }
);

export default ImageFitRightIcon;
