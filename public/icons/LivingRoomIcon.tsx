import React, { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: string;
  height?: string;
}

const LivingRoomIcon: React.FC<IconProps> = ({ color = "white", width = "48", height = "48", ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M23 4C23 1.78 24.78 0 27 0H34C36.2 0 38 1.8 38 4V8.32C35.68 9.14 34 11.34 34 13.94V18H23V4ZM10 13.92V18H21V4C21 1.78 19.22 0 17 0H10C7.8 0 6 1.8 6 4V8.3C8.32 9.12 10 11.34 10 13.92ZM39.32 10.06C37.36 10.38 36 12.24 36 14.24V20H8V14C8 12.9391 7.57857 11.9217 6.82843 11.1716C6.07828 10.4214 5.06087 10 4 10C2.93913 10 1.92172 10.4214 1.17157 11.1716C0.421427 11.9217 0 12.9391 0 14V24C0 26.2 1.8 28 4 28V32H8V28H36V32H40V28C42.2 28 44 26.2 44 24V14C44 11.58 41.82 9.64 39.32 10.06Z" fill={color} />
    </svg>

  );
};

export default LivingRoomIcon;