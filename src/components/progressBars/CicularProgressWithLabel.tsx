import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Circle } from 'rc-progress';
import './styles.css';

interface Props {
  MyScore: number;
}

const CircularProgressWithLabel = function CircularProgressWithLabel({
  MyScore,
}: Props): JSX.Element {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);
  useEffect(() => {
    const loop = setInterval(() => {
      valueRef.current += 1;
      setValue(valueRef.current);
      if (valueRef.current === MyScore) clearInterval(loop);
    }, 12.4);
  }, []);
  return (
    <div className="CircleAndLabel">
      <div className="CircleContainer">
        <Circle
          percent={Math.round((value * 100) / 130)}
          strokeWidth={6}
          strokeColor="#191F28"
          trailWidth={6}
          trailColor="#f2f4f6"
        />
      </div>
      <div className="LabelContainer" style={{ userSelect: 'none' }}>
        <span>총 이수 학점</span>
        <br />
        <span className="my-score-overall">
          <span className="my-score">{value}</span>학점 / 130학점
        </span>
      </div>
    </div>
  );
};

export default CircularProgressWithLabel;
