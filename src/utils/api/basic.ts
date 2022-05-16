import TakenCourse from './takenCourse';
import Course from './course';

class BasicResult {
  private userTakenCoursesList: TakenCourse;

  private totalCredits: number;

  private minConditionCredits: number;

  private maxConditionCredits: number;

  private satisfied: boolean;

  private messages: string[];

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

  public get getTakenCoursesList(): Array<Course> {
    return this.userTakenCoursesList.getTakenCourseInfo;
  }

  public get getTotalCredits(): number {
    return this.totalCredits;
  }

  public get getMessages(): Array<string> {
    return this.messages;
  }

  public get getMaxCredit(): number {
    return this.maxConditionCredits;
  }

  public get getMinCredit(): number {
    return this.minConditionCredits;
  }

  public get isSatisfied(): boolean {
    return this.satisfied;
  }
}

export default BasicResult;
