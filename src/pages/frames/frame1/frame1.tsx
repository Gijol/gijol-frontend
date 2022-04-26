import React from 'react';
import styled from 'styled-components';
import { FrameContainer } from './styles';
import ButtonContainer from './buttonBox/buttons';

const Title = styled.h1`
  white-space: pre;
  font-weight: 700;
  margin-top: 170px;
  z-index: 10;
  font-style: normal;
  color: ${(props) => props.theme.color.main};
  font-size: 60px;
  letter-spacing: 0px;
  line-height: 1.7;
  text-align: center;
`;

const Blur = styled.div`
  position: absolute;
  /* z-index: 0; */
  /* top: 0px; */
  left: 0;
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

const Frame1 = function Frame1(): JSX.Element {
  return (
    <FrameContainer>
      <Blur />
      <Title>
        졸업요건 <br />
        Gijol에서 간단하게 확인하세요.
      </Title>
      <ButtonContainer />
    </FrameContainer>
  );
};

export default Frame1;
