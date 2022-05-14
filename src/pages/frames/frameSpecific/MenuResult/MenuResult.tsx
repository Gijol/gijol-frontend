import React from 'react';
import SpecificBarProgress from './SpecificProgress/SpecificBarProgress';
import SpecificCircleProgress from './SpecificProgress/SpecificCircleProgress';
import {
  SpecificResultAll,
  SpecificResultBar,
  SpecificResultCircle,
  SpecificResultCircleAndBar,
  SpecificResultContainer,
  SpecificResultCourseTaken,
} from './styles';

interface Props {
  color: string;
  TotalScore: number;
  MyScore: number;
}

const MenuResult = function MenuResult({
  color,
  TotalScore,
  MyScore,
}: Props): JSX.Element {
  return (
    <SpecificResultContainer>
      <SpecificResultAll>
        <SpecificResultCircleAndBar>
          <SpecificResultCircle>
            <SpecificCircleProgress
              CourseColor={color}
              TotalScore={TotalScore}
              MyScore={MyScore}
            />
          </SpecificResultCircle>
          <SpecificResultBar>
            <SpecificBarProgress
              CourseColor={color}
              TotalScore={TotalScore}
              MyScore={MyScore}
            />
          </SpecificResultBar>
        </SpecificResultCircleAndBar>
        <SpecificResultCourseTaken>
          여기는 수강한 강의 목록
        </SpecificResultCourseTaken>
      </SpecificResultAll>
    </SpecificResultContainer>
  );
};

export default MenuResult;
