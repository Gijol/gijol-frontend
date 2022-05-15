import React from 'react';
import './styles.css';
import CircularProgressWithLabel from 'components/progressBars/CicularProgressWithLabel';
import LinearProgressWithLabel from 'components/progressBars/LinearProgressWithLabel';

const Overall = function Overall(): JSX.Element {
  return (
    <div className="Container">
      <div className="title">
        <p className="MainTitle">우선 전체적으로 봅시다</p>
        {/* <p className="SubTitle">
          당신은 <span className="overallScore">76</span> 학점을 들으셨군요!
        </p> */}
      </div>
      <div className="OverallResult">
        <div className="circular">
          <CircularProgressWithLabel MyScore={76} />
        </div>
        <div className="bar">
          <LinearProgressWithLabel />
        </div>
      </div>
    </div>
  );
};

export default Overall;
