import styled from 'styled-components';

const IntroduceConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 1em;
  height: 100%;

  > .mobile-title {
    padding-top: 1.7em;
    line-height: 1.3em;
    font-size: 40px;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: ${(props) => props.theme.color.main};
    > .color {
      letter-spacing: 0;
      color: ${(props) => props.theme.color.sub};
    }
  }

  > .mobile-sub-title {
    margin-top: 2em;
    line-height: 1.3em;
    letter-spacing: 0.05em;
    font-size: 14px;
    font-weight: 400;
  }
`;
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
      <div>Gijol은 PC로 이용가능합니다!</div>
    </IntroduceConatiner>
  );
};

export default MobileIntroduce;
