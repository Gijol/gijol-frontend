import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import { Circle } from 'rc-progress';

import { MobileHeader } from '../mobileContainer/moblieContainer';
import MLinearProgressWithLabel from '../mobileAnimation';


const IntroduceConatiner = styled.div`
  display: flex;
  flex-direction: column;
  /* width: auto */
  margin-left: 1em;
  margin-right: 1em;

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
const GraphContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 3em;
`;

const MobileIntroduce = function MobileIntroduce(): JSX.Element {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);
  // const [isDone, setDone] = useState<boolean>(false);

  useEffect(() => {
    const loop = setInterval(() => {
      setValue(valueRef.current);
      valueRef.current += 1;
      if (valueRef.current === 34) clearInterval(loop);
    }, 12.4);
  }, []);

  return (
    <IntroduceConatiner>
      <MobileHeader>
        <div className="logo">Gijol</div>
        <div className="qna-btn">QnA</div>
      </MobileHeader>

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
