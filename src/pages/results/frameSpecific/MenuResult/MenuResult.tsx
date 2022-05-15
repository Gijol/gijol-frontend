import React from 'react';
import CourseList from './CourseList/CourseList';
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
import './CourseList/styles.css';

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
            <CourseList />
          </CourseListContainer>
        </SpecificResultCourseTaken>
      </SpecificResultAll>
    </SpecificResultContainer>
  );
};

export default MenuResult;
