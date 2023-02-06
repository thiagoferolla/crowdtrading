import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface SolarIconProps {
  width?: number;
  height?: number;
}

function SolarIcon(props: SolarIconProps) {
  return (
    <Svg
      width={props.width ?? 14}
      height={props.height ?? 14}
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <Path
        d="M6.5.5V3h1V.5h-1zM2.75 2.047l-.703.703 1.765 1.781.72-.718L2.75 2.046zm8.5 0L9.469 3.812l.719.72 1.765-1.782-.703-.703zM7 3.5A3.507 3.507 0 003.5 7c0 1.928 1.572 3.5 3.5 3.5s3.5-1.572 3.5-3.5S8.928 3.5 7 3.5zm0 1c1.387 0 2.5 1.113 2.5 2.5S8.387 9.5 7 9.5A2.492 2.492 0 014.5 7c0-1.387 1.113-2.5 2.5-2.5zm-6.5 2v1H3v-1H.5zm10.5 0v1h2.5v-1H11zM3.812 9.469L2.048 11.25l.703.703 1.781-1.765-.718-.72zm6.376 0l-.72.719 1.782 1.765.703-.703-1.765-1.781zM6.5 11v2.5h1V11h-1z"
        fill="#F0A719"
      />
    </Svg>
  );
}

export default SolarIcon;
