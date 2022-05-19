import { Swiper, SwiperSlide } from 'swiper/react';
import { MobileMainContainer } from './mobileContainer/moblieContainer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ModalContainer } from './styles';
import MobileIntroduce from './mobileFrame/mobileIntroduce';
import MobileFunction from './mobileFrame/mobileFuntion/mobileFunction';
import MobileFooterContainer from './mobileFrame/mobileFooter';

const MobileSwiper = function MobileSwiper(): JSX.Element {
  const mobileHeight = window.screen.availHeight - 32;

  return (
    <Swiper
      slidesPerView={1}
      direction="vertical"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{
        width: '100%',
        height: mobileHeight,
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
        <MobileMainContainer>
          <MobileMainContainer>
            <MobileFooterContainer />
          </MobileMainContainer>
        </MobileMainContainer>
      </SwiperSlide>
    </Swiper>
  );
};

export default MobileSwiper;
