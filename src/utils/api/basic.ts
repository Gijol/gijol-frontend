import TakenCourse from './takenCourse';
import Course from './course';

class BasicResult {
  protected userTakenCoursesList: TakenCourse;

  protected totalCredits: number;

  protected minConditionCredits: number;

  protected maxConditionCredits: number;

  protected satisfied: boolean;


  protected messages: string[];

  constructor(
    userTakenCoursesList: TakenCourse,
    totalCredits: number,
    min: number,
    max: number,
    satisfied: boolean,
    messages: string[],
  ) {
    this.userTakenCoursesList = userTakenCoursesList;
    this.totalCredits = totalCredits;
    this.minConditionCredits = min;
    this.maxConditionCredits = max;
    this.satisfied = satisfied;
    this.messages = messages;
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

export default BasicResult;
