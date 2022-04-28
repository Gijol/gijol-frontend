import { useState } from 'react';
import ExplainDrawer from './explainDrawer/explainDrawer';
import {
  Explanation,
  ExplanationHeaderContainer,
  ExplanationHeader,
  DrawerContainer,
} from './styles';
import ExplainDrawerPic from './explainPic/explainPic';

const ExplanationFrame = function ExplanationFrame(): JSX.Element {
  const [stateNum, setStateNum] = useState<number>(1);

  const setStateNumber = (tempNum: number) => {
    setStateNum(tempNum);
  };

  return (
    <Explanation>
      <ExplanationHeaderContainer>
        <ExplanationHeader>
          졸업 요건 확인에 필요한 파일을 저장하세요
        </ExplanationHeader>
      </ExplanationHeaderContainer>
      <DrawerContainer>
        <ExplainDrawerPic stateNum={stateNum} />
        <ExplainDrawer stateNum={stateNum} setStateNumber={setStateNumber} />
      </DrawerContainer>
    </Explanation>
  );
};

export default ExplanationFrame;
