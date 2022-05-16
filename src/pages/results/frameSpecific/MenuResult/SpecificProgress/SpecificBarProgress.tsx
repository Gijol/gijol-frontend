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
  const courseMessage = () => {
    const result = [];
    if (MyScore > 0) {
      if (TotalScore - MyScore <= 0) {
        result.push(<span>전부 들으셨네요!</span>);
      } else {
        result.push(<span>{value}% 들으셨네요!</span>);
      }
    } else {
      result.push(<span>아무것도 안들으셨네요..</span>);
    }
    return result;
  };

  return (
    <SpecificBarAndLabel>
      <SpecificLabelOfBar color={CourseColor}>
        {courseMessage()}
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
