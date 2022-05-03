import { useSwiper } from 'swiper/react';
import { ButtonsContainer, StandardButton } from './styles';

const ButtonContainer = function ButtonContainer(): JSX.Element {
  const swiper = useSwiper();
  return (
    <ButtonsContainer>
      <StandardButton onClick={() => swiper.slideNext()}>
        처음 확인해요
      </StandardButton>
      <StandardButton onClick={() => swiper.slideTo(2)}>
        확인한 적 있어요
      </StandardButton>
    </ButtonsContainer>
  );
};
export default ButtonContainer;
