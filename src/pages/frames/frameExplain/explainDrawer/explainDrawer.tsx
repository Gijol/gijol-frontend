import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const DrawerContainer = styled.div`
  min-width: 300px;
`;

const toggleOn = keyframes`
  0% {
    height: 0px;
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
    height: 0px;
  }
`;

const DrawerElement = styled.div`
  width: 100%;
  transition-duration: 2s;

  > .drawer-body-container-on {
    /* width: 100%; */
    border-left: 3px solid ${(props) => props.theme.color.sub};
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 20px;
    overflow: hidden;
    height: 200px;
    animation: ${toggleOn} 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  > .drawer-body-container-off {
    /* width: 100%; */
    border-left: 3px solid ${(props) => props.theme.color.sub};
    height: 0px;
    overflow: hidden;
    animation: ${toggleOff} 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

const DrawerHeaderContainer = styled.div`
  height: 60px;
  border: 1px solid ${(props) => props.theme.color.main};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 14px;
  margin-bottom: 5px;
  margin-top: 5px;
  font-size: 20px;
  color: ${(props) => props.theme.color.main};
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
        <DrawerElement>
          <DrawerHeaderContainer onClick={(e) => setNum(e, 3)}>
            Step3
          </DrawerHeaderContainer>
          <div
            className={
              pickNum === 3
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
          <DrawerHeaderContainer onClick={(e) => setNum(e, 4)}>
            Step4
          </DrawerHeaderContainer>
          <div
            className={
              pickNum === 4
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
      </DrawerContainer>
    </div>
  );
};

export default ExplainDrawer;
