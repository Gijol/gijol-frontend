import styled from 'styled-components';

const FileAdd = styled.section`
  max-width: ${(props) => props.theme.basicWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5em;
`;

const FileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export { FileAdd, FileContainer };
