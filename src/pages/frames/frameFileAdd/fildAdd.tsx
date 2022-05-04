import styled from 'styled-components';
import DragDrop from './dragDrop/dragDrop';
import SelectMajor from './select/selectBox';

const FileAdd = styled.section`
  max-width: ${(props) => props.theme.basicWidth};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FileAddFrame = function FileAddFrame(): JSX.Element {
  return (
    <>
      <SelectMajor />
      <FileAdd>
        <DragDrop />
      </FileAdd>
    </>
  );
};

export default FileAddFrame;
