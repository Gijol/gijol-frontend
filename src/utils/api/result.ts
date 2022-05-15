import BasicResult from './basic';
import EtcMandatory from './header/etcMandatory';
import Humanities from './header/humanities';
import LanguageBasic from './header/languageBasic';
import Major from './header/major';
import OtherUncheckedClass from './header/otherUncheckedClass';
import ScienceBasic from './header/scienceBasic';

class Result {
  etcMandatory: BasicResult;

  humanities: BasicResult;

  languageBasic: BasicResult;

  major: BasicResult;

  otherClass: BasicResult;

  science: BasicResult;

  constructor(
    etc: BasicResult,
    hum: BasicResult,
    language: BasicResult,
    major: BasicResult,
    other: BasicResult,
    sci: BasicResult,
  ) {
    this.etcMandatory = etc;
    this.humanities = hum;
    this.languageBasic = language;
    this.major = major;
    this.otherClass = other;
    this.science = sci;
  }

  public get getEtcMandatory(): BasicResult {
    return this.etcMandatory;
  }

  public getHumanities(): BasicResult {
    return this.humanities;
  }

  getLanguageBasic(): BasicResult {
    return this.humanities;
  }

  getMajor(): BasicResult {
    return this.major;
  }

  getOtherClass(): BasicResult {
    return this.otherClass;
  }

  getScience(): BasicResult {
    return this.science;
  }
}

export default Result;
