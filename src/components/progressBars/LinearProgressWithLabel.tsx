import { Line } from 'rc-progress';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import './styles.css';

type Props = {
  Score: number;
  Color: string;
  Name: string;
};

const LinearProgress = function LinearProgress({
  Score,
  Color,
  Name,
}: Props): JSX.Element {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);
  useEffect(() => {
    const loop = setInterval(() => {
      valueRef.current += 1;
      setValue(valueRef.current);
      if (valueRef.current === Math.round((Score * 100) / 20))
        clearInterval(loop);
    }, 20);
  }, []);
  return (
    <div>이거 많이 어려웠어요 미안해요</div>
    // <div className="BarAndLabel">
    //   <div className="CourseName">{`${Name}`}</div>
    //   <div className="BarContainer">
    //     <div className="BarProgress">
    //       <Line
    //         strokeColor={Color}
    //         strokeWidth={6}
    //         trailColor="#f2f4f6"
    //         trailWidth={6}
    //         percent={value}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

const LinearProgressWithLabel =
  function LinearProgressWithLabel(): JSX.Element {
    return (
      <div>
        <div className="Bars">
          <LinearProgress Score={7} Color="#6bcb77" Name="언어와 기초" />
          <LinearProgress Score={7} Color="#6bcb77" Name="언어와 기초" />
          <LinearProgress Score={7} Color="#6bcb77" Name="언어와 기초" />
          <LinearProgress Score={7} Color="#6bcb77" Name="언어와 기초" />
          <LinearProgress Score={7} Color="#6bcb77" Name="언어와 기초" />
        </div>
      </div>
    );
  };

export default LinearProgressWithLabel;
