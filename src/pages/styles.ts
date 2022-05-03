import styled from 'styled-components';

const FrameContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #f0f2f9;
  max-width: ${(props) => props.theme.basicWidth};
`;

const MainContainer = styled.div`
  background-color: #f0f2f9;
  width: 100%;
`;

export { MainContainer, FrameContainer };
