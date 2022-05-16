import React from 'react';
import './styles.css';

const CourseList = function CourseList(): JSX.Element {
  return (
    <div className="course-box">
      <div className="course-title">
        <span className="course-code">GS1001</span>
        <br />
        <span className="course-name">미적분학과 응용</span>
      </div>
      <hr className="course-distribute" />
      <div className="course-semester">2020 1학기 3학점</div>
    </div>
  );
};

export default CourseList;
