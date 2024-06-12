// @flow
import * as React from 'react';


type Props = {
  size?: number;
};

const Meditation = ({
                size = 184,
              }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 184 184" fill="none" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink">
      <circle cx="91.9223" cy="91.8364" r="91.6626" fill="#20BFF3"/>
      <rect x="34.0059" y="33.9202" width="116.744" height="116.744" fill="url(#pattern0_0_1)"/>
      <defs>
        <pattern id="pattern0_0_1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_0_1" transform="scale(0.0078125)"/>
        </pattern>
        <image id="image0_0_1" width="128" height="128"
               xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>

  );
};

export default Meditation;