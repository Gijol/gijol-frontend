import ExplainDrawer from './explainDrawer/explainDrawer';
import {
  Explanation,
  ExplanationHeaderContainer,
  ExplanationHeader,
  ExplainPicContainer,
  DrawerContainer,
} from './styles';

const ExplanationFrame = function ExplanationFrame(): JSX.Element {
  return (
    <Explanation>
      <ExplanationHeaderContainer>
        <ExplanationHeader>
          졸업 요건 확인에 필요한 파일을 저장하세요
        </ExplanationHeader>
      </ExplanationHeaderContainer>
      <DrawerContainer>
        <ExplainPicContainer />
        <ExplainDrawer />
      </DrawerContainer>
    </Explanation>
  );
};

export default ExplanationFrame;
