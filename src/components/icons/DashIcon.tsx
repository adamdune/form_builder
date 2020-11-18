import React from 'react';
import Svg, {Path} from 'react-native-svg';

function DashIcon({color = 'black', height = 20, width = 20}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill={color}>
      <Path
        fillRule="evenodd"
        d="M4 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 014 8z"
      />
    </Svg>
  );
}

export default DashIcon;
