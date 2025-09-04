


import React, { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
    color?: string;
    width?: string;
    height?: string;
}

const AdultsIcon: React.FC<IconProps> = ({
    color = "white",
    width = "24",
    height = "24",
    ...props
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M20.2721 21C20.2721 19.6044 20.2721 18.9067 20.0999 18.3389C19.7121 17.0605 18.7116 16.06 17.4332 15.6722C16.8654 15.5 16.1677 15.5 14.7721 15.5H9.7721C8.37653 15.5 7.67875 15.5 7.11095 15.6722C5.83255 16.06 4.83213 17.0605 4.44433 18.3389C4.27209 18.9067 4.27209 19.6044 4.27209 21M16.7721 7.5C16.7721 9.98528 14.7574 12 12.2721 12C9.78681 12 7.77209 9.98528 7.77209 7.5C7.77209 5.01472 9.78681 3 12.2721 3C14.7574 3 16.7721 5.01472 16.7721 7.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export default AdultsIcon;
