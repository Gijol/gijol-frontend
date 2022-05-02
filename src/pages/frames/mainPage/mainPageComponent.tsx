import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import MainFrame from 'pages/frames/frame1/frame1';
import ExplanationFrame from 'pages/frames/frameExplain/explanation';
import FrameContainer from 'pages/styles';
import FileAddFrame from 'pages/frames/frameFileAdd/fildAdd';

const MainComponent = function MainComponent(): JSX.Element {
  const viewHeigth = window.innerHeight;
  const swiper = useSwiper();

  return (
    <Swiper
      style={{ width: '100%', height: viewHeigth }}
      direction="vertical"
      speed={500}
      modules={[Navigation, Pagination]}
      navigation
      mousewheel
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      on={{
        reachEnd: () => {
          swiper.mousewheel.disable();
        },
      }}
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
