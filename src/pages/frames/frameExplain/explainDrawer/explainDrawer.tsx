import React, { useEffect, useState } from 'react';
import { DrawerContainer } from './styles';
import Drawer from './drawer';

interface IProps {
  setStateNumber: (nowNum: number) => void;
  stepNum: number;
}

const ExplainDrawer = function ExplainDrawer({
  setStateNumber,
  stepNum,
}: IProps): JSX.Element {
  const [pickNum, setPickNum] = useState<number>(stepNum);

  // 자식 component에서 num을 조절하게 하는 함수
  const setNum = (e: React.MouseEvent<HTMLDivElement>, thisNum: number) => {
    let tempNum = thisNum;
    if (tempNum === pickNum) {
      tempNum += 1;
    }
    if (tempNum > 4) {
      tempNum = 1;
    }
    setPickNum(tempNum);
  };

  // useEffect로 부모 컴포턴트에 현재 Num 전달
  useEffect(() => {
    setStateNumber(pickNum);
  }, [pickNum]);

  return (
    <div>
      <DrawerContainer>
        <Drawer drawerNum={1} pickNum={pickNum} setNum={setNum} />
        <Drawer drawerNum={2} pickNum={pickNum} setNum={setNum} />
        <Drawer drawerNum={3} pickNum={pickNum} setNum={setNum} />
        <Drawer drawerNum={4} pickNum={pickNum} setNum={setNum} />
      </DrawerContainer>
    </div>
  );
};

export default ExplainDrawer;
