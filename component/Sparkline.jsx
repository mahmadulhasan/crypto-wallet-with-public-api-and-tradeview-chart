import React from 'react';
import { Svg, Polyline } from 'react-native-svg';

const Sparkline = ({ data = [], positive }) => {
  if (!data || data.length < 2) return null;

  const max = Math.max(...data);
  const min = Math.min(...data);

  // Prevent divide-by-zero
  if (max === min) return null;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 30 - ((value - min) / (max - min)) * 30;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <Svg width={100} height={30}>
      <Polyline
        points={points}
        fill="none"
        stroke={positive ? '#22c55e' : '#ef4444'}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Sparkline;
