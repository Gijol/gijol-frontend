import { useState } from 'react';
import styled from 'styled-components';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  MobileMainContainer,
  MobileHeader,
} from './mobileContainer/moblieContainer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import '../../../App.css';

import MobileIntroduce from './mobileFrame/mobileIntroduce';

const ModalContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-left: 1.5em;
  padding-right: 1em;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 1.5em;
  height: 150px;
  background-color: ${(props) => props.theme.color.sub};
  z-index: 10;

  > .exit {
    position: absolute;
    right: 80px;
    top: 5px;
  }
`;

const MobileMain = function MobileMain(): JSX.Element {
  const [isPressed, setPressed] = useState<boolean>(false);
  const press = () => {
    setPressed(true);
    console.log('Pressed');
  };
  return (
    <>
      <MobileHeader>
        <div className="logo">Gijol</div>
        <div className="qna-btn">QnA</div>
      </MobileHeader>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        direction="vertical"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          width: '100%',
          height: '100vh',
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <SwiperSlide>
          <MobileMainContainer>
            <MobileIntroduce />
          </MobileMainContainer>
        </SwiperSlide>
        <SwiperSlide>
          <MobileMainContainer>모바일 2</MobileMainContainer>
        </SwiperSlide>
        <SwiperSlide>
          <MobileMainContainer>모바일 3</MobileMainContainer>
        </SwiperSlide>
      </Swiper>
      <div>
        {!isPressed ? (
          <ModalContainer
            onClick={() => {
              press();
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              Gijol, <br /> 웹으로 만나보세요!
            </div>
            <div className="exit">x</div>
          </ModalContainer>
        ) : null}
      </div>
    </>
  );
};

export default MobileMain;
