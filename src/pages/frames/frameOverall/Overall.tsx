import React from 'react';
import './styles.css';

const Overall = function Overall(): JSX.Element {
  return (
    <div className="Container">
      <div className="title">
        <p className="MainTitle">우선 전체적으로 봅시다</p>
        <p className="SubTitle">
          당신은 <span className="overallScore">76</span> 학점을 들으셨군요!
        </p>
      </div>
      <div className="OverallResult">
        <div className="circular">원형 그래프</div>
        <div className="bar">막대 그래프</div>
      </div>
    </div>
  );
};

export default Overall;
