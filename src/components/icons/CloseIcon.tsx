import React from 'react';
import Svg, {Path} from 'react-native-svg';

function TrashIcon({color = 'black', height = 20, width = 20}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill={color}>
      <Path
        fillRule="evenodd"
        d="M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"
      />
    </Svg>
  );
}

export default TrashIcon;
