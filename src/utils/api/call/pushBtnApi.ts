import getResult from 'utils/apiCall';

import Result from 'utils/api/result';
import BasicResult from 'utils/api/basic';
import Course from 'utils/api/course';
import TakenCourse from 'utils/api/takenCourse';

const callGraduateApi = async (
  courseFile: File,
  majorValue: string,
): Promise<Result> => {
  const result = await getResult(courseFile, majorValue);

  // Result객체 만들 변수 미리 선언
  const BasicResultArr: Array<BasicResult> = [];

  const resultArr = Object.values(result);

  const apiTotalCredits = resultArr[6] as number;
  resultArr.forEach((value: any) => {
    if (typeof value === 'object') {
      const {
        maxConditionCredits,
        messages,
        minConditionCredits,
        satisfied,
        totalCredits,
        userTakenCoursesList,
      } = value;

      const messagesArray: string[] = Object.values(messages);
      const { takenCourses } = userTakenCoursesList;
      const takenCourseArray = Object.values(takenCourses);
      const courseArray: Array<Course> = [];
      takenCourseArray.forEach((val: any) => {
        const { year, semester, courseType, courseName, courseCode, credit } =
          val;
        const course = new Course(
          year,
          semester,
          courseType,
          courseName,
          courseCode,
          credit,
        );
        courseArray.push(course);
      });
      const takenCourse = new TakenCourse(courseArray);
      const bResult = new BasicResult(
        takenCourse,
        totalCredits,
        minConditionCredits,
        maxConditionCredits,
        satisfied,
        messagesArray,
      );
      BasicResultArr.push(bResult);
    }
  });
  const apiResult = new Result(
    BasicResultArr[0],
    BasicResultArr[1],
    BasicResultArr[2],
    BasicResultArr[3],
    BasicResultArr[4],
    BasicResultArr[5],
    apiTotalCredits,
  );
  console.log(apiResult);
  return apiResult;
};

export default callGraduateApi;
