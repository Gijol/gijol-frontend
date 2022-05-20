import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import Result from 'utils/api/result';
import MainTitle from 'common/title/title';
import SubTitle from 'common/title/subTitle';
import '../frameOverall/styles.css';

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
      <div className="title">
        <MainTitle
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="cubic-bezier(0.2, 0.8, 0.2, 1)"
          data-aos-once="true"
        >
          그럼 어떤 강의를 들어야 할까요?
        </MainTitle>
        <SubTitle
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="cubic-bezier(0.2, 0.8, 0.2, 1)"
          data-aos-once="true"
        >
          Gijol은 아래 강의를 추천합니다
        </SubTitle>
      </div>
      <SwiperContainer
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="cubic-bezier(0.2, 0.8, 0.2, 1)"
        data-aos-once="true"
      >
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
          <SwiperSlide className="swiper-box">
            <RecommendBox
              name="언어와기초"
              result={result.getLanguageBasic}
              colorCode="#6BCB76"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-box">
            <RecommendBox
              name="기초 과학"
              result={result.getScience}
              colorCode="#4C96FE"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-box">
            <RecommendBox
              name="인문 사회"
              result={result.getHumanities}
              colorCode="#F0C934"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-box">
            <RecommendBox
              name="전공"
              result={result.getMajor}
              colorCode="#FF6B6B"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-box">
            <RecommendBox
              name="기타 필수"
              result={result.getEtcMandatory}
              colorCode="#9771FB"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-box">
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
