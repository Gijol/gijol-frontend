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
  courseList: Array<any>;
}

const MenuResult = function MenuResult({
  color,
  TotalScore,
  MyScore,
  courseList,
}: Props): JSX.Element {
  const courselist = () => {
    const result = [];
    if (courseList.length > 0) {
      for (let i = 0; i < courseList.length; i += 1) {
        result.push(<CourseList key={i} courseListSingle={courseList[i]} />);
      }
    } else if (courseList.length === 0) {
      result.push(
        <div className="unattended-container">
          <span className="unattended">강의를 수강하지 않았습니다.</span>
        </div>,
      );
    }
    return result;
  };
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
          <CourseListContainer>{courselist()}</CourseListContainer>
        </SpecificResultCourseTaken>
      </SpecificResultAll>
    </SpecificResultContainer>
  );
};

export default MenuResult;
