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

const MobileMain = function MobileMain(): JSX.Element {
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
    </>
  );
};

export default MobileMain;
