import { useState, useEffect } from 'react';
import './styles.css';
import Result from 'utils/api/result';

import AOS from 'aos';
import 'aos/dist/aos.css';

import MainContainer from 'common/container/container';
import MainTitle from 'common/title/title';
import SubTitle from 'common/title/subTitle';
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
  const languageScoreLeft = Math.max(
    result.getLanguageBasic.getMinCredit,
    result.getLanguageBasic.getTotalCredits,
  );
  const scienceScoreLeft = Math.max(
    result.getScience.getMinCredit,
    result.getScience.getTotalCredits,
  );
  const humanitiesScoreLeft = Math.max(
    result.getHumanities.getMinCredit,
    result.getHumanities.getTotalCredits,
  );
  const majorScoreLeft = Math.max(
    result.getMajor.getMinCredit,
    result.getMajor.getTotalCredits,
  );
  const etcmandatoryScoreLeft = Math.max(
    result.getEtcMandatory.getMinCredit,
    result.getEtcMandatory.getTotalCredits,
  );

  const etcScoreLeft =
    130 -
    languageScoreLeft -
    scienceScoreLeft -
    humanitiesScoreLeft -
    majorScoreLeft -
    etcmandatoryScoreLeft;

  useEffect(() => {
    AOS.init();
  });
  return (
    <MainContainer style={{ height: '800px' }}>
      <div className="title">
        <MainTitle
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="cubic-bezier(0.2, 0.8, 0.2, 1)"
          data-aos-once="true"
        >
          이제 세부적으로 볼까요?
        </MainTitle>
        <SubTitle
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="cubic-bezier(0.2, 0.8, 0.2, 1)"
          data-aos-once="true"
        >
          아래 결과는 항목별 이수 여부 및 학점 현황입니다
        </SubTitle>
      </div>
      <div className="specific-result-container">
        <div
          className="SpecificResult"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="cubic-bezier(0.2, 0.8, 0.2, 1)"
          data-aos-once="true"
        >
          <div className="menu-bar">
            <div className="menu">
              <SelectContainer>
                <Select
                  color="#6BCB77"
                  value={1}
                  getCourseValue={getCourseValue}
                />
                <Select
                  color="#4D96FF"
                  value={2}
                  getCourseValue={getCourseValue}
                />
                <Select
                  color="#F0CA33"
                  value={3}
                  getCourseValue={getCourseValue}
                />
                <Select
                  color="#FF6B6B"
                  value={4}
                  getCourseValue={getCourseValue}
                />
                <Select
                  color="#9772FB"
                  value={5}
                  getCourseValue={getCourseValue}
                />
                <Select
                  color="#B0B8C1"
                  value={6}
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
              forHumanities={value}
            />
          ) : null}
          {value === 2 ? (
            <MenuResult
              color="#4D96FF"
              TotalScore={result.getScience.getMinCredit}
              MyScore={result.getScience.getTotalCredits}
              courseList={result.science.getTakenCoursesList}
              satisfied={result.getScience.isSatisfied}
              forHumanities={value}
            />
          ) : null}
          {value === 3 ? (
            <MenuResult
              color="#F0CA33"
              TotalScore={result.getHumanities.getMinCredit}
              MyScore={result.getHumanities.getTotalCredits}
              courseList={result.humanities.getTakenCoursesList}
              satisfied={result.getHumanities.isSatisfied}
              forHumanities={value}
            />
          ) : null}
          {value === 4 ? (
            <MenuResult
              color="#FF6B6B"
              TotalScore={result.getMajor.getMinCredit}
              MyScore={result.getMajor.getTotalCredits}
              courseList={result.major.getTakenCoursesList}
              satisfied={result.getMajor.isSatisfied}
              forHumanities={value}
            />
          ) : null}
          {value === 5 ? (
            <MenuResult
              color="#9772FB"
              TotalScore={result.getEtcMandatory.getMinCredit}
              MyScore={result.getEtcMandatory.getTotalCredits}
              courseList={result.etcMandatory.getTakenCoursesList}
              satisfied={result.getEtcMandatory.isSatisfied}
              forHumanities={value}
            />
          ) : null}
          {value === 6 ? (
            <MenuResult
              color="#B0B8C1"
              TotalScore={etcScoreLeft}
              MyScore={result.getOtherClass.getTotalCredits}
              courseList={result.otherClass.getTakenCoursesList}
              satisfied={result.getOtherClass.isSatisfied}
              forHumanities={value}
            />
          ) : null}
        </div>
      </div>
    </MainContainer>
    // <div className="Container">

    // </div>
  );
};

export default Specific;
