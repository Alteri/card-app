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
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512.103 512.103"
        width={size}
        height={size}
        fill={color}
      >
        <g>
          <path d="M405.333,0.052H106.667C47.756,0.052,0,47.808,0,106.718l0,0c0,35.346,28.654,64,64,64h384   c33.692,0.411,61.813-25.619,64-59.243C514.568,52.562,468.892,2.721,409.979,0.153C408.431,0.085,406.882,0.052,405.333,0.052z" />
          <path d="M469.333,213.385H42.667c-11.782,0-21.333,9.551-21.333,21.333v170.667C21.404,464.266,69.119,511.981,128,512.052h256   c58.881-0.071,106.596-47.786,106.667-106.667V234.718C490.667,222.936,481.115,213.385,469.333,213.385z M320,320.052H192   c-11.782,0-21.333-9.551-21.333-21.333s9.551-21.333,21.333-21.333h128c11.782,0,21.333,9.551,21.333,21.333   S331.782,320.052,320,320.052z" />
        </g>
      </svg>
    </IconWrapper>
  );
};

export default Icon;
