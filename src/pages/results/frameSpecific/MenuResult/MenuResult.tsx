import React from 'react';
import SpecificBarProgress from './SpecificProgress/SpecificBarProgress';
import SpecificCircleProgress from './SpecificProgress/SpecificCircleProgress';
import {
  CourseListContainer,
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
          <CourseListContainer>
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
            여기에 스크롤 영역이 들어갑니다. 여기에 스크롤 영역이 들어갑니다.
          </CourseListContainer>
        </SpecificResultCourseTaken>
      </SpecificResultAll>
    </SpecificResultContainer>
  );
};

export default MenuResult;
