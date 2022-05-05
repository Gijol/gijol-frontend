import { useState } from 'react';
import Title from 'common/title/title';
import ExplainDrawer from './explainDrawer/explainDrawer';
import {
  Explanation,
  ExplanationHeaderContainer,
  ExplanationHeader,
  DrawerContainer,
} from './styles';
import ExplainDrawerPic from './explainPic/explainPic';

const ExplanationFrame = function ExplanationFrame(): JSX.Element {
  const [stepNum, setStepNum] = useState<number>(1);

  const setStepNumber = (tempNum: number) => {
    setStepNum(tempNum);
  };

  return (
    <Explanation>
      <ExplanationHeaderContainer>
        <Title>졸업 요건 확인에 필요한 파일을 저장하세요</Title>
      </ExplanationHeaderContainer>
      <DrawerContainer>
        <ExplainDrawerPic stepNum={stepNum} />
        <ExplainDrawer stepNum={stepNum} setStateNumber={setStepNumber} />
      </DrawerContainer>
    </Explanation>
  );
};

export default ExplanationFrame;
