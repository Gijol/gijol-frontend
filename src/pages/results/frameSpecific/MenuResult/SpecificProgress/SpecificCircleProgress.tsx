import React, { useEffect, useState, useRef } from 'react';
import { Circle } from 'rc-progress';
import { SpecificCircleContainer, SpecificLabelOfCircle } from './styles';

interface Props {
  CourseColor: string;
  TotalScore: number;
  MyScore: number;
}

const SpecificCircleProgress = function SpecificCircleProgress({
  CourseColor,
  TotalScore,
  MyScore,
}: Props): JSX.Element {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);
  useEffect(() => {
    if (MyScore > 0) {
      const loop = setInterval(() => {
        valueRef.current += 1;
        setValue(valueRef.current);
        if (MyScore > 0) {
          if (MyScore >= TotalScore) {
            if (
              valueRef.current === Math.round((TotalScore * 100) / TotalScore)
            )
              clearInterval(loop);
          } else if (MyScore < TotalScore) {
            if (valueRef.current === Math.round((MyScore * 100) / TotalScore))
              clearInterval(loop);
          }
        }
      }, 8);
    } else if (MyScore === 0) {
      setValue(0);
    }
  }, []);
  return (
    <SpecificCircleContainer>
      <SpecificLabelOfCircle>
        {`${MyScore}학점 / ${TotalScore}학점`}
      </SpecificLabelOfCircle>
      <Circle
        percent={value}
        strokeWidth={8}
        strokeColor={CourseColor}
        trailWidth={8}
        trailColor="#ffffff"
      />
    </SpecificCircleContainer>
  );
};

export default SpecificCircleProgress;
