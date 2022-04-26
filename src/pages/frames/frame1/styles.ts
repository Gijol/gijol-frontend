import styled from 'styled-components';

const FrameContainer = styled.div`
  max-width: ${(props) => props.theme.basicWidth};
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: aqua;
  overflow: hidden;
  /* justify-content: center; */
  margin-left: auto;
  margin-right: auto;
`;

export { FrameContainer };
