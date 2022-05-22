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
  console.log(courseListSingle);
  return (
    <div className="course-box" style={{ userSelect: 'none' }}>
      <div className="course-title">
        <span className="course-code">{courseListSingle.getCourseCode}</span>
        <br />
        <span className="course-name">
          {courseListSingle.getCourseName}
          {courseListSingle.getCourseType === null ? null : (
            <span
              style={{
                fontSize: '14px',
                padding: '4px',
                margin: '4px 8px',
                backgroundColor: '#D1D6D8',
                borderRadius: '5px',
              }}
            >
              {courseListSingle.getCourseType}
            </span>
          )}
        </span>
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
