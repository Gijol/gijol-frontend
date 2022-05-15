import styled from 'styled-components';

const FrameContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f9;
  overflow: hidden;
`;

const TitleContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  white-space: pre;
  font-weight: 700;
  z-index: 10;
  margin-top: -20px;
  font-style: normal;
  color: ${(props) => props.theme.color.main};
  font-size: 60px;
  letter-spacing: 0px;
  line-height: 1.7;
  text-align: center;
`;

const Blur = styled.div`
  position: absolute;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 500px;
  margin: 0;
  padding: 0;
  background: linear-gradient(
    180deg,
    white 0%,
    white 59px,
    rgba(255, 255, 255, 0) 100%
  );
`;

export { TitleContainer, FrameContainer, Title, Blur };
