import React from 'react';
import Svg, {Path} from 'react-native-svg';

function PlusIcon({color = 'black', height = 20, width = 20}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill={color}>
      <Path
        fillRule="evenodd"
        d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z"
      />
    </Svg>
  );
}

export default PlusIcon;
