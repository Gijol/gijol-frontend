import { useState } from 'react';
import './styles.css';
import Result from 'utils/api/result';

import MenuResult from './MenuResult/MenuResult';
import { SelectContainer, NonSelect } from './MenuSelect/styles';
import Select from './MenuSelect/Select';

interface IProps {
  result: Result;
}

const Specific = function Specific({ result }: IProps): JSX.Element {
  const [value, setValue] = useState<number>(0);
  const getCourseValue = (courseValue: number) => {
    setValue(courseValue);
  };
  return (
    <div className="Container">
      <div className="MainTitle">조금 더 자세히 볼까요?</div>
      <div className="SpecificResult">
        <div className="menu-bar">
          <div className="menu">
            <SelectContainer>
              <Select
                color="#6BCB77"
                value={1}
                name="언어와 기초"
                getCourseValue={getCourseValue}
              />
              <Select
                color="#4D96FF"
                value={2}
                name="기초과학"
                getCourseValue={getCourseValue}
              />
              <Select
                color="#F0CA33"
                value={3}
                name="인문사회"
                getCourseValue={getCourseValue}
              />
              <Select
                color="#FF6B6B"
                value={4}
                name="전공"
                getCourseValue={getCourseValue}
              />
              <Select
                color="#9772FB"
                value={5}
                name="기타필수"
                getCourseValue={getCourseValue}
              />
              <Select
                color="#B0B8C1"
                value={6}
                name="기타"
                getCourseValue={getCourseValue}
              />
            </SelectContainer>
          </div>
        </div>
        {value === 0 ? (
          <NonSelect>
            <p>옆의 대시보드를 눌러 세부결과를 확인하세요</p>
          </NonSelect>
        ) : null}
        {value === 1 ? (
          <MenuResult
            color="#6BCB77"
            TotalScore={7}
            MyScore={result.getLanguageBasic.getTotalCredits}
          />
        ) : null}
        {value === 2 ? (
          <MenuResult
            color="#4D96FF"
            TotalScore={12}
            MyScore={result.getScience.getTotalCredits}
          />
        ) : null}
        {value === 3 ? (
          <MenuResult
            color="#F0CA33"
            TotalScore={36}
            MyScore={result.getHumanities.getTotalCredits}
          />
        ) : null}
        {value === 4 ? (
          <MenuResult
            color="#FF6B6B"
            TotalScore={result.getMajor.getMinCredit}
            MyScore={result.getMajor.getTotalCredits}
          />
        ) : null}
        {value === 5 ? (
          <MenuResult
            color="#9772FB"
            TotalScore={7}
            MyScore={result.getEtcMandatory.getTotalCredits}
          />
        ) : null}
        {value === 6 ? (
          <MenuResult
            color="#B0B8C1"
            TotalScore={result.getOtherClass.getMaxCredit}
            MyScore={result.getOtherClass.getTotalCredits}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Specific;
