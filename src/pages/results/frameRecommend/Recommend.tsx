import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Result from 'utils/api/result';
import Title from 'common/title/title';

import SubTitle from 'common/title/subTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
import MainContainer from 'common/container/container';
import RecommendBox from './recommendBox/recommendBox';

const SwiperContainer = styled.div`
  width: 100%;
  height: fit-content;
`;
interface IProps {
  result: Result;
}
const Recommend = function Recommend({ result }: IProps): JSX.Element {
  return (
    <MainContainer>
      <Title>그럼 어떤 강의를 들어야 할까요?</Title>
      <SubTitle>Gijol은 아래 강의를 추천합니다</SubTitle>
      <SwiperContainer>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          touchRatio={0.01}
          pagination
          slidesPerView="auto"
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          style={{ width: '100%' }}
        >
          <SwiperSlide style={{ width: '432px', height: '500px' }}>
            <RecommendBox
              name="언어와기초"
              result={result.getLanguageBasic}
              colorCode="#6BCB76"
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: '432px', height: '500px' }}>
            <RecommendBox
              name="기초 과학"
              result={result.getScience}
              colorCode="#4C96FE"
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: '432px', height: '500px' }}>
            <RecommendBox
              name="인문 사회"
              result={result.getHumanities}
              colorCode="#F0C934"
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: '432px', height: '500px' }}>
            <RecommendBox
              name="전공"
              result={result.getMajor}
              colorCode="#FF6B6B"
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: '432px', height: '500px' }}>
            <RecommendBox
              name="기타 필수"
              result={result.getEtcMandatory}
              colorCode="#9771FB"
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: '432px', height: '500px' }}>
            <RecommendBox
              name="기타"
              result={result.getOtherClass}
              colorCode="#AFB8C1"
            />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </MainContainer>
  );
};

export default Recommend;
