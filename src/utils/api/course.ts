class Course {
  #year: number;
  #semester: string;
  #courseType: string;
  #courseName: string;
  #courseCode: string;
  #courseCredit: number;

  constructor(
    year: number,
    semester: string,
    courseType: string,
    courseName: string,
    courseCode: string,
    courseCredit: number,
  ) {
    this.#year = year;
    this.#semester = semester;
    this.#courseType = courseType;
    this.#courseName = courseName;
    this.#courseCode = courseCode;
    this.#courseCredit = courseCredit;
  }

  getCourseYear() {
    return this.#year;
  }

  getCourseName() {
    return this.#courseName;
  }
  getCourseCode() {
    return this.#courseCode;
  }
  getCourseInfo() {
    return [this.getCourseName, this.getCourseCode];
  }
}

export default Course;
