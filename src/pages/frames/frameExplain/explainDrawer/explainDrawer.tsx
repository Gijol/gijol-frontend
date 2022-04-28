import React, { useState } from 'react';
import {
  DrawerContainer,
  DrawerElement,
  DrawerHeaderContainer,
} from './styles';

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
