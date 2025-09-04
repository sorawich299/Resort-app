import React, { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: string;
  height?: string;
}

const PrivateBarIcon: React.FC<IconProps> = ({ color = "white", width = "48", height = "48", ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 3.2002C17.6 3.2002 1.59999 4.0002 3.19999 5.6002L22.4 25.6002V38.4002C22.4 41.6002 12.8 40.0002 12.8 44.8002H35.2C35.2 40.0002 25.6 41.6002 25.6 38.4002V25.6002L44.8 5.6002C46.4 4.0002 30.4 3.2002 24 3.2002ZM24 6.4002C32 6.4002 39.2 7.2002 39.2 7.2002L36.8 9.6002H11.2L8.79999 7.2002C8.79999 7.2002 16 6.4002 24 6.4002Z" fill={color} />
    </svg>

  );
};

export default PrivateBarIcon;