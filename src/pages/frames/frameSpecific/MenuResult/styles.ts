import styled from 'styled-components';

const SpecificResultContainer = styled.div`
  position: relative;
  width: 840px;
  height: 100%;
  border-radius: 0 20px 20px 0;
  box-shadow: -1px 0 10px gray;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SpecificResultAll = styled.div`
  width: 800px;
  height: 460px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SpecificResultCircleAndBar = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SpecificResultCourseTaken = styled.div`
  width: 480px;
  height: 100%;
  background-color: #f2f4f6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpecificResultCircle = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f2f4f6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpecificResultBar = styled.div`
  width: 300px;
  height: 140px;
  background-color: #f2f4f6;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); */
  // 그림자 이용할 것인지 논의해봐야됨
`;

const CourseListContainer = styled.div`
  width: 440px;
  height: 420px;
  background-color: white;
  border-radius: 20px;
`;

export {
  SpecificResultContainer,
  SpecificResultAll,
  SpecificResultCircleAndBar,
  SpecificResultCourseTaken,
  SpecificResultCircle,
  SpecificResultBar,
  CourseListContainer,
};
