import React from 'react';
import './styles.css';

const Recommend = function Recommend(): JSX.Element {
  return (
    <div className="Container">
      <div className="title">
        <div className="MainTitle">그럼 어떤 강의를 들어야 할까요?</div>
        <div className="SubTitle">Gijol은 아래 강의를 추천합니다</div>
      </div>
      <div className="RecommendCard">언어와 기초</div>
    </div>
  );
};

export default Recommend;
