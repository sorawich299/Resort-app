import React, { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: string;
  height?: string;
}

const LocationAddressIcon: React.FC<IconProps> = ({
  color = "white",
  width = "20",
  height = "28",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.0002 0.666016C4.67492 0.666016 0.342529 4.99842 0.342529 10.3236C0.342529 16.9324 8.98514 26.6344 9.35314 27.0441C9.69874 27.4291 10.3022 27.4284 10.6473 27.0441C11.0151 26.6344 19.6578 16.9324 19.6578 10.3236C19.6577 4.99842 15.3254 0.666016 10.0002 0.666016ZM10.0002 15.1827C7.3209 15.1827 5.14122 13.0029 5.14122 10.3236C5.14122 7.64435 7.32096 5.46466 10.0002 5.46466C12.6794 5.46466 14.8591 7.6444 14.8591 10.3237C14.8591 13.0029 12.6794 15.1827 10.0002 15.1827Z"
        fill={color}
      />
    </svg>
  );
};

export default LocationAddressIcon;
