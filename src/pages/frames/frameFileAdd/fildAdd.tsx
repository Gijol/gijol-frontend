import styled from 'styled-components';
import DragDrop from './dragDrop/dragDrop';

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
    <FileAdd>
      <DragDrop />
    </FileAdd>
  );
};

export default FileAddFrame;
