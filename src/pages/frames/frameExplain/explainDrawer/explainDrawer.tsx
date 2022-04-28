import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const DrawerContainer = styled.div`
  min-width: 600px;
`;

const toggleOn = keyframes`
  0% {
    height: 10px;
  }

  100% {
    height: 200px;
  }
`;

const toggleOff = keyframes`
  0% {
    height: 200px;
  }

  100% {
    height: 10px;
  }
`;

const DrawerElement = styled.div`
  width: 100%;
  transition-duration: 2s;

  > .drawer-body-container-on {
    width: 100%;
    overflow: hidden;
    height: 200px;
    background-color: blueviolet;
    animation: ${toggleOn} 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  > .drawer-body-container-off {
    width: 100%;
    height: 10px;
    overflow: hidden;
    background-color: blueviolet;
    animation: ${toggleOff} 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

const DrawerHeaderContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: brown;
`;

const ExplainDrawer = function ExplainDrawer(): JSX.Element {
  const [pickNum, setPickNum] = useState<number>(1);

  const setNum = (e: React.MouseEvent<HTMLDivElement>, thisNum: number) => {
    setPickNum(thisNum);
  };

  return (
    <div>
      <DrawerContainer>
        <DrawerElement>
          <DrawerHeaderContainer onClick={(e) => setNum(e, 1)}>
            Step1
          </DrawerHeaderContainer>
          <div
            className={
              pickNum === 1
                ? 'drawer-body-container-on'
                : 'drawer-body-container-off'
            }
            onClick={(e) => setNum(e, 0)}
            aria-hidden="true"
          >
            <br />
            설명 어쩌고 저쩌고
          </div>
        </DrawerElement>
        <DrawerElement>
          <DrawerHeaderContainer onClick={(e) => setNum(e, 2)}>
            Step2
          </DrawerHeaderContainer>
          <div
            className={
              pickNum === 2
                ? 'drawer-body-container-on'
                : 'drawer-body-container-off'
            }
            onClick={(e) => setNum(e, 0)}
            aria-hidden="true"
          >
            <br />
            설명 어쩌고 저쩌고
            {/* 이 위치에 component 들어가야 함 */}
          </div>
        </DrawerElement>
      </DrawerContainer>
    </div>
  );
};

export default ExplainDrawer;
