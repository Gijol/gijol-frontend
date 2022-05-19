import { useState } from 'react';
import './styles.css';
import Result from 'utils/api/result';

import MainContainer from 'common/container/container';
import MainTitle from 'common/title/title';
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
  const left =
    130 -
    result.getLanguageBasic.getMinCredit -
    result.getScience.getMinCredit -
    result.getHumanities.getMinCredit -
    result.getMajor.getMinCredit -
    result.getEtcMandatory.getMinCredit;
  return (
    <MainContainer>
      <MainTitle style={{ marginBottom: '2em' }}>
        조금 더 자세히 볼까요?
      </MainTitle>
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
            TotalScore={result.getLanguageBasic.getMinCredit}
            MyScore={result.getLanguageBasic.getTotalCredits}
            courseList={result.languageBasic.getTakenCoursesList}
            satisfied={result.getLanguageBasic.isSatisfied}
          />
        ) : null}
        {value === 2 ? (
          <MenuResult
            color="#4D96FF"
            TotalScore={result.getScience.getMinCredit}
            MyScore={result.getScience.getTotalCredits}
            courseList={result.science.getTakenCoursesList}
            satisfied={result.getScience.isSatisfied}
          />
        ) : null}
        {value === 3 ? (
          <MenuResult
            color="#F0CA33"
            TotalScore={result.getHumanities.getMinCredit}
            MyScore={result.getHumanities.getTotalCredits}
            courseList={result.humanities.getTakenCoursesList}
            satisfied={result.getHumanities.isSatisfied}
          />
        ) : null}
        {value === 4 ? (
          <MenuResult
            color="#FF6B6B"
            TotalScore={result.getMajor.getMinCredit}
            MyScore={result.getMajor.getTotalCredits}
            courseList={result.major.getTakenCoursesList}
            satisfied={result.getMajor.isSatisfied}
          />
        ) : null}
        {value === 5 ? (
          <MenuResult
            color="#9772FB"
            TotalScore={result.getEtcMandatory.getMinCredit}
            MyScore={result.getEtcMandatory.getTotalCredits}
            courseList={result.etcMandatory.getTakenCoursesList}
            satisfied={result.getEtcMandatory.isSatisfied}
          />
        ) : null}
        {value === 6 ? (
          <MenuResult
            color="#B0B8C1"
            TotalScore={left}
            MyScore={result.getOtherClass.getTotalCredits}
            courseList={result.otherClass.getTakenCoursesList}
            satisfied={result.getOtherClass.isSatisfied}
          />
        ) : null}
      </div>
    </MainContainer>
    // <div className="Container">

    // </div>
  );
};

export default Specific;
