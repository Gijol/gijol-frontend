import styled from 'styled-components';
import Title from 'assets/title';

import DragDrop from './dragDrop/dragDrop';
import SelectMajor from './select/selectBox';
import MajorButtonContainer from './buttonContainer/buttonContainer';

const FileAdd = styled.section`
  max-width: ${(props) => props.theme.basicWidth};
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;
`;

const FileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FileAddFrame = function FileAddFrame(): JSX.Element {
  return (
    <FileContainer>
      <Title>아래 칸에 엑셀 파일을 끌어다 놓아주세요</Title>
      <FileAdd>
        <DragDrop />
      </FileAdd>
      <MajorButtonContainer />
    </FileContainer>
  );
};

export default FileAddFrame;
