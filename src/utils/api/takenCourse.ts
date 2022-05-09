import Course from './course';

class TakenCourse {
  #takenCourses: Array<Course>;

  constructor(takenCourses: Array<Course>) {
    this.#takenCourses = takenCourses;
  }

  getTakenCourseInfo() {
    return this.#takenCourses;
  }
}

export default TakenCourse;
