import EtcMandatory from './header/etcMandatory';
import Humanities from './header/humanities';
import LanguageBasic from './header/languageBasic';
import Major from './header/major';
import OtherUncheckedClass from './header/otherUncheckedClass';
import ScienceBasic from './header/scienceBasic';

class Result {
  etcMandatory: EtcMandatory;

  humanities: Humanities;

  languageBasic: LanguageBasic;

  major: Major;

  otherClass: OtherUncheckedClass;

  science: ScienceBasic;

  constructor(
    etc: EtcMandatory,
    hum: Humanities,
    language: LanguageBasic,
    major: Major,
    other: OtherUncheckedClass,
    sci: ScienceBasic,
  ) {
    this.etcMandatory = etc;
    this.humanities = hum;
    this.languageBasic = language;
    this.major = major;
    this.otherClass = other;
    this.science = sci;
  }

  getEtcMandatory(): EtcMandatory {
    return this.etcMandatory;
  }

  getHumanities(): Humanities {
    return this.humanities;
  }

  getLanguageBasic(): LanguageBasic {
    return this.humanities;
  }

  getMajor(): Major {
    return this.major;
  }

  getOtherClass(): OtherUncheckedClass {
    return this.otherClass;
  }


  getScience(): ScienceBasic {
    return this.science;
  }
}

export default Result;
