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
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-clock"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    </IconWrapper>
  );
};

export default Icon;
