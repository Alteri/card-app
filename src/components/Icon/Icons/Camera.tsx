import React from "react";
import { IconProps } from "../types";
import { IconWrapper } from "../styled";
import { Colors } from "../../Global";

const Icon = ({
  color = Colors.black,
  size = "20px",
  className,
  ...rest
}: IconProps) => {
  return (
    <IconWrapper size={size} className={className} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Filled"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={color}
      >
        <path d="M14.021,6.106,9.793,1.879A2.976,2.976,0,0,0,7.672,1H1A1,1,0,0,0,1,3H7.672a1.006,1.006,0,0,1,.707.293L11.086,6H5a5.006,5.006,0,0,0-5,5v8a5.006,5.006,0,0,0,5,5h8a5.006,5.006,0,0,0,5-5V11A5.008,5.008,0,0,0,14.021,6.106Z" />
        <path d="M22.9,8.955a1.987,1.987,0,0,0-2.092.184l-.8.6V20.261l.8.6a2,2,0,0,0,3.2-1.6V10.743A1.988,1.988,0,0,0,22.9,8.955Z" />
      </svg>
    </IconWrapper>
  );
};

export default Icon;
