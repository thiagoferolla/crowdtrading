import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface WindIconProps {
  width?: number;
  height?: number;
}

function WindIcon(props: WindIconProps) {
  return (
    <Svg
      width={props.width ?? 12}
      height={props.height ?? 12}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <Path
        d="M7.969 0C6.86 0 6 .904 6 2h1c0-.615.365-1 .969-1C8.562 1 9 1.438 9 2.031 9 2.625 8.584 3 7.969 3H0v1h7.969C9.064 4 10 3.148 10 2.031A2.037 2.037 0 007.969 0zM0 5.5v1h9.75c.695 0 1.25.555 1.25 1.25S10.445 9 9.75 9c-.371 0-.66-.12-.875-.344C8.66 8.432 8.5 8.078 8.5 7.5h-1c0 .771.236 1.404.656 1.844.42.44.998.656 1.594.656A2.258 2.258 0 0012 7.75 2.258 2.258 0 009.75 5.5H0zM0 8v1h3.969C4.574 9 5 9.406 5 10c0 .604-.396 1-1 1s-1-.396-1-1H2c0 1.107.893 2 2 2s2-.893 2-2c0-1.117-.924-2-2.031-2H0z"
        fill="#4A88D0"
      />
    </Svg>
  );
}

export default WindIcon;
