import SwiperCore, { Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import MainFrame from 'pages/frames/frame1/frame1';
import ExplanationFrame from 'pages/frames/frameExplain/explanation';
import { FrameContainer } from 'pages/styles';
import FileAddFrame from 'pages/frames/frameFileAdd/fildAdd';
import { useCallback } from 'react';

SwiperCore.use([Mousewheel, Pagination]);
const swiper = useSwiper();

const MainComponent = function MainComponent(): JSX.Element {
  const viewHeigth = window.innerHeight;

  const goToNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goToLast = () => {
    swiper.slideTo(3);
  };

  const goToFirst = () => {
    swiper.slideReset();
  };
  return (
    <Swiper
      style={{ width: '100%', height: viewHeigth }}
      direction="vertical"
      speed={500}
      modules={[Navigation, Pagination]}
      mousewheel
      // onSwiper={swiper}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <MainFrame goToLast={goToLast} goToNext={goToNext} />
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
    </Swiper>
  );
};

export default MainComponent;
