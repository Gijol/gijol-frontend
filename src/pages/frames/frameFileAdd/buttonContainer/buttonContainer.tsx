import { useState } from 'react';
import question from 'assets/img/question.png';
import SelectMajor from '../select/selectBox';

import RenderHelp from './helpToggle';
import { Image, QuestionContainer, UploadButton, Container } from './style';

interface IProps {
  setMajorValueBy: (e: string) => void;
  pushBtn: () => void;
}
const MajorButtonContainer = function MajorButtonContainer({
  setMajorValueBy,
  pushBtn,
}: IProps): JSX.Element {
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
      <SelectMajor setMajorValueBy={setMajorValueBy} />
      <UploadButton type="button" onClick={pushBtn} tabIndex={-1}>
        결과 확인하기!
      </UploadButton>
    </Container>
  );
};

export default MajorButtonContainer;
