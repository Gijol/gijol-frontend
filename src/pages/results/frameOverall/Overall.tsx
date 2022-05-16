import { useState } from 'react';
import './styles.css';
import CircularProgressWithLabel from 'components/progressBars/CicularProgressWithLabel';
import LinearProgressWithLabel from 'components/progressBars/LinearProgressWithLabel';

interface IProps {
  total: number;
}
const Overall = function Overall({ total }: IProps): JSX.Element {
  const [totalCredit, setTotalCredit] = useState<number>(total);

  return (
    <div className="Container">
      <div className="title">
        <p className="MainTitle">우선 전체적으로 봅시다</p>
        {/* <p className="SubTitle">
          당신은 <span className="overallScore">76</span> 학점을 들으셨군요!
        </p> */}
      </div>
      <div className="OverallResult">
        <div className="circular">
          <CircularProgressWithLabel MyScore={totalCredit} />
        </div>
        <div className="bar">
          <LinearProgressWithLabel />
        </div>
      </div>
    </div>
  );
};

export default Overall;
