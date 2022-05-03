import SwiperCore, { A11y, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import MainFrame from 'pages/frames/frame1/frame1';
import ExplanationFrame from 'pages/frames/frameExplain/explanation';
import { FrameContainer } from 'pages/styles';
import FileAddFrame from 'pages/frames/frameFileAdd/fildAdd';

SwiperCore.use([Mousewheel, Pagination, Navigation]);

const MainComponent = function MainComponent(): JSX.Element {
  const viewHeigth = window.innerHeight;

  return (
    <Swiper
      // controller={{ swiper: swiper }}
      style={{ width: '100%', height: viewHeigth }}
      direction="vertical"
      speed={500}
      modules={[Navigation, Pagination]}
      mousewheel
      pagination
      touchRatio={0.1}
      // swipeHandler={swiper}
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
    </Swiper>
  );
};

export default MainComponent;
