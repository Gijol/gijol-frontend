import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Line } from 'rc-progress';
import { SpecificBarAndLabel } from './styles';

interface Props {
  CourseColor: string;
  TotalScore: number;
  MyScore: number;
}

const SpecificBarProgress = function SpecificBarProgress({
  CourseColor,
  TotalScore,
  MyScore,
}: Props): JSX.Element {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);
  useEffect(() => {
    const loop = setInterval(() => {
      valueRef.current += 1;
      setValue(valueRef.current);
      if (valueRef.current === Math.round((MyScore * 100) / TotalScore))
        clearInterval(loop);
    }, 15);
  }, []);
  return (
    <SpecificBarAndLabel>
      <Line
        percent={value}
        strokeColor={CourseColor}
        trailColor="#f2f4f6"
        strokeWidth={12}
        trailWidth={12}
      />
      <div className="specific-bar-label">{`${value}%`}</div>
    </SpecificBarAndLabel>
  );
};

export default SpecificBarProgress;
