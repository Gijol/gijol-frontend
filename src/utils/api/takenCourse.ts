import Course from './course';

class TakenCourse {
  #takenCourses: Array<Course>;

  constructor(takenCourses: Array<Course>) {
    this.#takenCourses = takenCourses;
  }

  public get getTakenCourseInfo(): Array<Course> {
    return this.#takenCourses;
  }
}

export default TakenCourse;
