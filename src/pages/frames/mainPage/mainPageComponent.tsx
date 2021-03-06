import { useState, useEffect } from 'react';
import SwiperCore, { Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../App.css';

import MainFrame from 'pages/frames/frame1/frame1';
import { FrameContainer } from 'pages/styles';
import FileAddFrame from 'pages/frames/frameFileAdd/fildAdd';
import ExplanationFrame from '../frameExplain/Explanation';

SwiperCore.use([Mousewheel, Pagination, Navigation]);

const MainComponent = function MainComponent(): JSX.Element {
  const pagination = {
    clickable: true,
  };
  const viewHeight = window.innerHeight - 50;

  return (
    <Swiper
      // controller={{ swiper: swiper }}
      style={{
        width: '100%',
        height: viewHeight,
        minHeight: '800px',
        overflowY: 'hidden',
      }}
      direction="vertical"
      speed={500}
      modules={[Pagination]}
      mousewheel
      autoplay={false}
      pagination={pagination}
      touchRatio={0}
    >
      <SwiperSlide>
        <MainFrame />
      </SwiperSlide>
      <SwiperSlide>
        <FrameContainer>
          <ExplanationFrame />
        </FrameContainer>
      </SwiperSlide>
      <SwiperSlide>
        <FrameContainer>
          <FileAddFrame />
        </FrameContainer>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default MainComponent;
