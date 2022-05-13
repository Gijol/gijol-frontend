class Course {
  private year: number;

  private semester: string;

  private courseType: string;

  private courseName: string;

  private courseCode: string;

  private courseCredit: number;

  constructor(
    year: number,
    semester: string,
    courseType: string,
    courseName: string,
    courseCode: string,
    courseCredit: number,
  ) {
    this.year = year;
    this.semester = semester;
    this.courseType = courseType;
    this.courseName = courseName;
    this.courseCode = courseCode;
    this.courseCredit = courseCredit;
  }

  public get getCourseYear() {
    return this.year;
  }

  public get getCourseName() {
    return this.courseName;
  }

  public get getCourseCode() {
    return this.courseCode;
  }

  public get getCourseInfo() {
    return [this.getCourseName, this.getCourseCode];
  }
}

export default Course;
