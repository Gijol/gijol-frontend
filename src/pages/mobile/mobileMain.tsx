import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  MobileHeader,
  MobileMainContainer,
} from './mobileContainer/moblieContainer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ModalContainer } from './styles';
import MobileIntroduce from './mobileFrame/mobileIntroduce';
import MobileFunction from './mobileFrame/mobileFunction';

const MobileMain = function MobileMain(): JSX.Element {
  const [isPressed, setPressed] = useState<boolean>(false);
  const press = () => {
    setPressed(true);
  };

  const mobileHeight = window.screen.availHeight;

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
        <SwiperSlide style={{ height: mobileHeight }}>
          <MobileMainContainer>
            <MobileIntroduce />
          </MobileMainContainer>
        </SwiperSlide>
        <SwiperSlide style={{ height: mobileHeight }}>
          <MobileMainContainer>
            <MobileFunction />
          </MobileMainContainer>
        </SwiperSlide>
        <SwiperSlide style={{ height: mobileHeight }}>
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
