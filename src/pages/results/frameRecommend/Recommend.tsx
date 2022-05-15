import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
import RecommendBox from './recommendBox/recommendBox';

const SwiperContainer = styled.div`
  /* max-width: 1000px; */
  width: 100%;
  height: fit-content;
`;

const Recommend = function Recommend(): JSX.Element {
  return (
    <div className="Container">
      <div className="title">
        <div className="MainTitle">그럼 어떤 강의를 들어야 할까요?</div>
        <div className="SubTitle">Gijol은 아래 강의를 추천합니다</div>
      </div>
      <SwiperContainer>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
          }}
          pagination
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          style={{ width: '100%' }}
        >
          <SwiperSlide style={{ width: '432px', height: '500px' }}>
            <RecommendBox name="언어와기초1" />
          </SwiperSlide>
          <SwiperSlide style={{ width: '432px', height: '500px' }}>
            <RecommendBox name="언어와기초2" />
          </SwiperSlide>
          <SwiperSlide style={{ width: '432px', height: '500px' }}>
            <RecommendBox name="언어와기초3" />
          </SwiperSlide>
          <SwiperSlide style={{ width: '432px', height: '500px' }}>
            <RecommendBox name="언어와기초4" />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </div>
  );
};

export default Recommend;
