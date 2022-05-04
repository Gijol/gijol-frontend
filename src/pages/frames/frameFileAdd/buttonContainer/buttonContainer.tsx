import { useState } from 'react';
import question from 'img/question.png';
import SelectMajor from '../select/selectBox';

import {
  Help,
  Image,
  QuestionContainer,
  UploadButton,
  Container,
} from './style';

interface IProps {
  isOver: boolean;
}
export const RenderHelp = function RenderHelp({ isOver }: IProps): JSX.Element {
  return (
    <div>
      {isOver ? (
        <Help>만약 기초교육학부 학생이시면 희망 전공를 골라주세요</Help>
      ) : (
        <div />
      )}
    </div>
  );
};

const MajorButtonContainer = function MajorButtonContainer(): JSX.Element {
  const [overState, setOverState] = useState(false);

  const setMouseTrue = () => {
    setOverState(true);
  };

  const setMouseFalse = () => {
    setOverState(false);
  };

  return (
    <Container>
      <QuestionContainer>
        <div
          onMouseOver={setMouseTrue}
          onMouseLeave={setMouseFalse}
          onFocus={setMouseTrue}
        >
          <Image src={question} alt="question" />
          <RenderHelp isOver={overState} />
        </div>
      </QuestionContainer>
      <SelectMajor />
      <UploadButton type="button">결과 확인하기!</UploadButton>
    </Container>
  );
};

export default MajorButtonContainer;
