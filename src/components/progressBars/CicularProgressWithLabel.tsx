import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Circle } from 'rc-progress';
import './styles.css';

const CircularProgressWithLabel =
  function CircularProgressWithLabel(): JSX.Element {
    const [value, setValue] = useState(0);
    const valueRef = useRef(0);
    useEffect(() => {
      const loop = setInterval(() => {
        valueRef.current += 1;
        setValue(valueRef.current);
        if (valueRef.current === 64) clearInterval(loop);
      }, 15);
    }, []);
    return (
      <div className="CircleAndLabel">
        <div className="CircleContainer">
          <Circle
            percent={value}
            strokeWidth={6}
            strokeColor="#191F28"
            trailWidth={6}
            trailColor="#f2f4f6"
          />
        </div>
        <div className="LabelContainer">{`${value}%`}</div>
      </div>
    );
  };

export default CircularProgressWithLabel;
