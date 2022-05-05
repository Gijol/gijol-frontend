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
  const viewHeigth = window.innerHeight;

  const pagination = {
    clickable: true,
  };

  return (
    <Swiper
      // controller={{ swiper: swiper }}
      style={{ width: '100%', height: viewHeigth }}
      direction="vertical"
      speed={500}
      modules={[Navigation, Pagination]}
      mousewheel
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
