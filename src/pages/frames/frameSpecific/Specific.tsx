import React from 'react';
import './styles.css';
import MenuSelect from './MenuSelect/MenuSelect';
import MenuResult from './MenuResult/MenuResult';

const Specific = function Specific(): JSX.Element {
  return (
    <div className="Container">
      <div className="MainTitle">조금 더 자세히 볼까요?</div>
      <div className="SpecificResult">
        <div className="menu-bar">
          <div className="menu">
            <MenuSelect />
          </div>
        </div>
        <MenuResult />
      </div>
    </div>
  );
};

export default Specific;
