import React from 'react';

const CourseList = function CourseList(): JSX.Element {
  return (
    <div className="course-box">
      <div className="course-title">
        여기는 강의 코드
        <br />
        여기 강의 명
      </div>
      <hr className="course-distribute" />
      <div className="course-semester">2020 1학기 3학점</div>
    </div>
  );
};

export default CourseList;
