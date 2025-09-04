import React, { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: string;
  height?: string;
}

const DiningIcon: React.FC<IconProps> = ({ color = "white", width = "48", height = "48", ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_304_4211)">
        <path d="M38.4 14.4H43.2V4.8H38.4V14.4ZM33.6 48H0V43.2H33.6V48ZM38.4 33.336L37.44 32.328C34.9854 29.733 33.6122 26.3 33.6 22.728V0H48V22.824C48 26.328 46.704 29.712 44.328 32.28L43.2 33.528V43.2H48V48H38.4V33.336ZM12 33.6V28.8H21.6V33.6H33.6V38.4H0V33.6H12Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_304_4211">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default DiningIcon;

