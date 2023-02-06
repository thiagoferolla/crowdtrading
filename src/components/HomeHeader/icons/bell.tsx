import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface BellProps {
  width?: number;
  height?: number;
  color?: string;
}

function Bell(props: BellProps) {
  return (
    <Svg
      width={props.width || 20}
      height={props.height || 21}
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <Path
        d="M18 15h2v2H0v-2h2V8a8 8 0 1116 0v7zm-2 0V8A6 6 0 104 8v7h12zm-9 4h6v2H7v-2z"
        fill={props.color || "#000"}
      />
    </Svg>
  );
}

export default Bell;
