import React from 'react';
import Course from 'utils/api/course';
import './styles.css';

interface Props {
  courseListSingle: Course;
  forHumanities: number;
}

const CourseList = function CourseList({
  courseListSingle,
  forHumanities,
}: Props): JSX.Element {
  return (
    <div className="course-box">
      <div className="course-title">
        <span className="course-code">{courseListSingle.getCourseCode}</span>
        <br />
        <span className="course-name">
          {courseListSingle.getCourseName}
        </span>{' '}
        {forHumanities === 3 ? (
          <span style={{ fontSize: '24px' }}>
            {courseListSingle.getCourseType}
          </span>
        ) : null}
      </div>
      <hr className="course-distribute" />
      <div className="course-semester">
        {courseListSingle.getCourseYear}
        년도 {courseListSingle.getCourseSemester}{' '}
        {courseListSingle.getCourseCredit}학점
      </div>
    </div>
  );
};

export default CourseList;
