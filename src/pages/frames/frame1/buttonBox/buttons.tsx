import React from 'react';
import { ButtonsContainer, StandardButton } from './styles';

const ButtonContainer = function ButtonContainer(): JSX.Element {
  return (
    <ButtonsContainer>
      <StandardButton>처음 확인해요</StandardButton>
      <StandardButton>확인한 적 있어요</StandardButton>
    </ButtonsContainer>
  );
};
export default ButtonContainer;
