import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface HomeIconProps {
  size: number;
  color: string;
}

function HomeIcon(props: HomeIconProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Path
        d="M21.5 19.733a1 1 0 01-1 1h-16a1 1 0 01-1-1V9.223a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79v10.51zm-10-7v6h2v-6h-2z"
        fill={props.color}
      />
    </Svg>
  );
}

export default HomeIcon;
