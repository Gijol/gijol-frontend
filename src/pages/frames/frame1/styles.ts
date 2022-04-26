import styled from 'styled-components';

const FrameContainer = styled.div`
  max-width: ${(props) => props.theme.basicWidth};
  height: 100vh;
  display: flex;
  background-color: aqua;
  overflow: hidden;

  margin-left: auto;
  margin-right: auto;
`;

export { FrameContainer };
