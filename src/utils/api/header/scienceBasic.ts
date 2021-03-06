import BasicResult from '../basic';
import Course from '../course';
import TakenCourse from '../takenCourse';

class ScienceBasic extends BasicResult {
  constructor(
    userTakenCoursesList: TakenCourse,
    totalCredits: number,
    min: number,
    max: number,
    satisfied: boolean,
    messages: string[],
  ) {
    super(userTakenCoursesList, totalCredits, min, max, satisfied, messages);
  }
}

export default ScienceBasic;
