import React, { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: string;
  height?: string;
}

const BedroomIcon: React.FC<IconProps> = ({ color = "white", width = "48", height = "48", ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M36 4H20V18H4V0H0V30H4V24H40V30H44V12C44 9.87827 43.1571 7.84344 41.6569 6.34315C40.1566 4.84285 38.1217 4 36 4ZM12 16C13.5913 16 15.1174 15.3679 16.2426 14.2426C17.3679 13.1174 18 11.5913 18 10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10C6 11.5913 6.63214 13.1174 7.75736 14.2426C8.88258 15.3679 10.4087 16 12 16Z" fill={color} />
    </svg>


  );
};

export default BedroomIcon;