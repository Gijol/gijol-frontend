import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';

import Intro1 from 'assets/img/Gijol-introduce1.png';
import Intro2 from 'assets/img/Gijol-introduce2.png';
import { InnerContainer, MobileImage } from '../styles';

const MobileFunctionOverall = function MobileFunctionOverall(): JSX.Element {
  return (
    <InnerContainer>
      <div className="header">나의 수강 현황</div>
      <Swiper
        style={{
          paddingTop: '1em',
        }}
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <MobileImage>
            <img alt="intro1" className="inner-img" src={Intro1} />
          </MobileImage>
        </SwiperSlide>
        <SwiperSlide>
          <MobileImage>
            <img alt="intro2" className="inner-img" src={Intro2} />
          </MobileImage>
        </SwiperSlide>
      </Swiper>
    </InnerContainer>
  );
};

export default MobileFunctionOverall;
