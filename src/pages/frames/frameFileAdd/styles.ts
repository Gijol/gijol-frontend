import styled from 'styled-components';

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
`;

export { FileAdd, FileContainer };
