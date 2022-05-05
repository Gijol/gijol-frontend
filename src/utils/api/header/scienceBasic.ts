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

  getMinMaxCredit(): [number, number] {
    return [this.minConditionCredits, this.maxConditionCredits];
  }
  getTakenCoursesList(): Array<Course> {
    return this.userTakenCoursesList.getTakenCourseInfo();
  }
  getTotalCredits(): number {
    return this.totalCredits;
  }
  getMessages(): Array<string> {
    return this.messages;
  }
}

export default ScienceBasic;
