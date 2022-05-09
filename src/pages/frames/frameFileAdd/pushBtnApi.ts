import getResult from 'utils/apiCall';

import EtcMandatory from 'utils/api/header/etcMandatory';
import Humanities from 'utils/api/header/humanities';
import LanguageBasic from 'utils/api/header/languageBasic';
import Major from 'utils/api/header/major';
import OtherUncheckedClass from 'utils/api/header/otherUncheckedClass';
import ScienceBasic from 'utils/api/header/scienceBasic';
import Result from 'utils/api/result';

const callGraduateApi = async (
  courseFile: File | null,
  majorValue: string | undefined,
): Promise<Result> => {
  if (courseFile === null) {
    alert('성적표 파일을 업로드 해주세요');
    throw Error('성적표 미입력');
  }
  if (majorValue === null || majorValue === undefined) {
    alert('학과를 선택해주세요');
    throw Error('학과 미입력');
  }
  const result = await getResult(courseFile, majorValue);

  console.log(result);

  // EtcMandatory Class만들기
  const resultEtcMandatory = result.etcMandatory;
  const etcMandatory = new EtcMandatory(
    resultEtcMandatory.userTakenCoursesList,
    resultEtcMandatory.totalCredits,
    resultEtcMandatory.minConditionCredits,
    resultEtcMandatory.maxConditionCredits,
    resultEtcMandatory.satisfied,
    resultEtcMandatory.messages,
  );

  // Humanities Class만들기
  const resultHumanities = result.humanities;
  const humanities = new Humanities(
    resultHumanities.userTakenCoursesList,
    resultHumanities.totalCredits,
    resultHumanities.minConditionCredits,
    resultHumanities.maxConditionCredits,
    resultHumanities.satisfied,
    resultHumanities.messages,
  );

  // Language Basic Class제작
  const resultLangaugeBasic = result.languageBasic;
  const languageBasic = new LanguageBasic(
    resultLangaugeBasic.userTakenCoursesList,
    resultLangaugeBasic.totalCredits,
    resultLangaugeBasic.minConditionCredits,
    resultLangaugeBasic.maxConditionCredits,
    resultLangaugeBasic.satisfied,
    resultLangaugeBasic.messages,
  );

  // Major 클래스 제작
  const resultMajor = result.major;
  const major = new Major(
    resultMajor.userTakenCoursesList,
    resultMajor.totalCredits,
    resultMajor.minConditionCredits,
    resultMajor.maxConditionCredits,
    resultMajor.satisfied,
    resultMajor.messages,
  );

  const resultOther = result.otherUncheckedClass;
  const otherUncheckedClass = new OtherUncheckedClass(
    resultOther.userTakenCoursesList,
    resultOther.totalCredits,
    resultOther.minConditionCredits,
    resultOther.maxConditionCredits,
    resultOther.satisfied,
    resultOther.messages,
  );

  const resultScience = result.scienceBasic;
  const scienceBasic = new ScienceBasic(
    resultScience.userTakenCoursesList,
    resultScience.totalCredits,
    resultScience.minConditionCredits,
    resultScience.maxConditionCredits,
    resultScience.satisfied,
    resultScience.messages,
  );

  const apiResult = new Result(
    etcMandatory,
    humanities,
    languageBasic,
    major,
    otherUncheckedClass,
    scienceBasic,
  );
  return apiResult;
};


export default callGraduateApi;
