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

const SwiperContainer = styled.div`
  max-width: 1000px;
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
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
          }}
          pagination
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="RecommendCard">언어와 기초 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="RecommendCard">언어와 기초 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="RecommendCard">언어와 기초 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="RecommendCard">언어와 기초 4</div>
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </div>
  );
};

export default Recommend;
