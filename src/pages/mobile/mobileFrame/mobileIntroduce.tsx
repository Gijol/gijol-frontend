import { GraphContainer, IntroduceConatiner } from './styles';
import MLinearProgressWithLabel from '../mobileAnimation';

const MobileIntroduce = function MobileIntroduce(): JSX.Element {
  return (
    <IntroduceConatiner>
      <div className="mobile-title">
        지스트 졸업
        <br />
        <span className="color">Gijol</span>과 함께
      </div>
      <div className="mobile-sub-title">
        Gijol이 당신의 수강 현황과 <br /> 졸업 가능성을 분석해드립니다!
      </div>
      <GraphContainer>
        <MLinearProgressWithLabel />
      </GraphContainer>
    </IntroduceConatiner>
  );
};

export default MobileIntroduce;
