import { useState } from 'react';
import Result from 'utils/api/result';
import './styles.css';

import CircularProgressWithLabel from 'components/progressBars/CicularProgressWithLabel';
import LinearProgressWithLabel from 'components/progressBars/LinearProgressWithLabel';
import MainContainer from 'common/container/container';
import MainTitle from 'common/title/title';
import SubTitle from 'common/title/subTitle';

interface IProps {
  result: Result;
}
const Overall = function Overall({ result }: IProps): JSX.Element {
  const [totalCredit, setTotalCredit] = useState<number>(result.totalCredits);
  return (
    <MainContainer>
      <div className="title">
        <MainTitle>당신의 수강 현황을 알려드립니다</MainTitle>
        <SubTitle>우선 졸업요건 충족 현황에 대한 종합적인 결과입니다!</SubTitle>
      </div>
      <div className="OverallResult">
        <div className="circular">
          <CircularProgressWithLabel MyScore={totalCredit} />
        </div>
        <div className="bar">
          <LinearProgressWithLabel result={result} />
        </div>
      </div>
    </MainContainer>
  );
};

export default Overall;
