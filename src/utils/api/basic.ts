import TakenCourse from './takenCourse';
import Course from './course';

class BasicResult {
  private userTakenCoursesList: TakenCourse;

  private totalCredits: number;

  public minConditionCredits: number;

  public maxConditionCredits: number;

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

  public get getMinMaxCredit(): [number, number] {
    return [this.minConditionCredits, this.maxConditionCredits];
  }

  public get getTakenCoursesList(): Array<Course> {
    return this.userTakenCoursesList.getTakenCourseInfo;
  }

  readTotalCredits() {
    return this.totalCredits;
  }

  get getTotalCredits() {
    return this.readTotalCredits();
  }

  public get getMessages(): Array<string> {
    return this.messages;
  }

  getminCredit = () => {
    if (this.minConditionCredits === undefined) {
      console.log('no value');
    }
    console.log(this.minConditionCredits);
  };
}

export default BasicResult;
