import Intro from 'assets/img/Gijol-recommend.png';

import { InnerContainer, MobileImage } from '../styles';

const MobileFunctionRecommend =
  function MobileFunctionRecommend(): JSX.Element {
    return (
      <InnerContainer>
        <div className="header" style={{ marginBottom: '1em' }}>
          나를 위한 강의 추천
        </div>
        <MobileImage>
          <img alt="intro1" className="inner-img" src={Intro} />
        </MobileImage>
      </InnerContainer>
    );
  };

export default MobileFunctionRecommend;
