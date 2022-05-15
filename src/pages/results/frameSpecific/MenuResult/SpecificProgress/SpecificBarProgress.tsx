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
    const loop = setInterval(() => {
      valueRef.current += 1;
      setValue(valueRef.current);
      if (valueRef.current === Math.round((MyScore * 100) / TotalScore))
        clearInterval(loop);
    }, 15);
  }, []);
  return (
    <SpecificBarAndLabel>
      <SpecificLabelOfBar
        color={CourseColor}
      >{`${value}% 정도 들으셨네요!`}</SpecificLabelOfBar>
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
