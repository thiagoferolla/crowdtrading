import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface PortfolioIconProps {
  width?: number;
  height?: number;
  color?: string;
}

function PortfolioIcon(props: PortfolioIconProps) {
  return (
    <Svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M10 20C4.477 20 0 15.523 0 10 0 5.522 2.943 1.732 7 .458v2.124A8.003 8.003 0 0010 18a8.002 8.002 0 007.418-5h2.124c-1.274 4.057-5.064 7-9.542 7zm9.95-9H9V.05C9.329.017 9.663 0 10 0c5.523 0 10 4.477 10 10 0 .337-.017.671-.05 1zM11 2.062V9h6.938A8.004 8.004 0 0011 2.062z"
        fill={props.color || "#000"}
      />
    </Svg>
  );
}

export default PortfolioIcon;
