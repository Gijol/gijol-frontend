import { useEffect, useState, useRef } from 'react';
import { Line } from 'rc-progress';
import { SpecificBarAndLabel, SpecificLabelOfBar } from './styles';

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
    <SpecificBarAndLabel>
      <SpecificLabelOfBar color={CourseColor}>
        {MyScore - TotalScore > 0 ? (
          <span>전부 들으셨네요!</span>
        ) : (
          <span>{value}% 들으셨네요!</span>
        )}
      </SpecificLabelOfBar>
      <Line
        percent={value}
        strokeColor={CourseColor}
        trailColor="#ffffff"
        strokeWidth={8}
        trailWidth={8}
      />
    </SpecificBarAndLabel>
  );
};

export default SpecificBarProgress;
