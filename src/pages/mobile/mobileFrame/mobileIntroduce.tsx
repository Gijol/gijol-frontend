import { useEffect, useRef, useState } from 'react';

import { GraphContainer, IntroduceConatiner } from './styles';
import { MobileHeader } from '../mobileContainer/moblieContainer';
import MLinearProgressWithLabel from '../mobileAnimation';

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
