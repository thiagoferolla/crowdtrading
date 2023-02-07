import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface PortfolioIconProps {
  size: number;
  color: string;
}

function PortfolioIcon(props: PortfolioIconProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Path
        d="M12.5 22c-5.523 0-10-4.477-10-10 0-4.478 2.943-8.268 7-9.542v2.124A8.003 8.003 0 0012.5 20a8.002 8.002 0 007.418-5h2.124c-1.274 4.057-5.064 7-9.542 7zm9.95-9H11.5V2.05c.329-.033.663-.05 1-.05 5.523 0 10 4.477 10 10 0 .337-.017.671-.05 1zM13.5 4.062V11h6.938A8.004 8.004 0 0013.5 4.062z"
        fill={props.color}
      />
    </Svg>
  );
}

export default PortfolioIcon;
