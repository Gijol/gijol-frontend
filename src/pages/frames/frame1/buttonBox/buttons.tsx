import React from 'react';
import { ButtonsContainer, StandardButton } from './styles';

interface IFace {
  goToNext: () => void;
  goToLast: () => void;
}

const ButtonContainer = function ButtonContainer({
  goToNext,
  goToLast,
}: IFace): JSX.Element {
  return (
    <ButtonsContainer>
      <StandardButton onClick={goToLast}>처음 확인해요</StandardButton>
      <StandardButton onClick={goToNext}>확인한 적 있어요</StandardButton>
    </ButtonsContainer>
  );
};
export default ButtonContainer;
