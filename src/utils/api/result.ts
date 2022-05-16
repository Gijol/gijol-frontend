import BasicResult from './basic';

class Result {
  etcMandatory: BasicResult;

  humanities: BasicResult;

  languageBasic: BasicResult;

  major: BasicResult;

  otherClass: BasicResult;

  science: BasicResult;

  totalCredits: number;

  constructor(
    language: BasicResult,
    sci: BasicResult,
    major: BasicResult,
    hum: BasicResult,
    etc: BasicResult,
    other: BasicResult,
    num: number,
  ) {
    this.etcMandatory = etc;
    this.humanities = hum;
    this.languageBasic = language;
    this.major = major;
    this.otherClass = other;
    this.science = sci;
    this.totalCredits = num;
  }

  public get getEtcMandatory(): BasicResult {
    return this.etcMandatory;
  }

  public get getHumanities(): BasicResult {
    return this.humanities;
  }

  public get getLanguageBasic(): BasicResult {
    return this.humanities;
  }

  public get getMajor(): BasicResult {
    return this.major;
  }

  public get getOtherClass(): BasicResult {
    return this.otherClass;
  }

  public get getScience(): BasicResult {
    return this.science;
  }

  public get getTotalCredits(): number {
    return this.totalCredits;
  }
}

export default Result;
