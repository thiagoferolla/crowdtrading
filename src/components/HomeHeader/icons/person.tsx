import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface PersonProps {
  width?: number;
  height?: number;
  color?: string;
}

function Person(props: PersonProps) {
  return (
    <Svg
      width={props.width || 16}
      height={props.height || 21}
      viewBox="0 0 16 21"
      fill="none"
      {...props}
    >
      <Path
        d="M0 21a8 8 0 0116 0h-2a6 6 0 10-12 0H0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
        fill={props.color || "#000"}
      />
    </Svg>
  );
}

export default Person;
