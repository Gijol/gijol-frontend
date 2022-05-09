import getResult from 'utils/apiCall';
import BasicResult from 'utils/api/basic';
import EtcMandatory from 'utils/api/header/etcMandatory';
import Humanities from 'utils/api/header/humanities';
import LanguageBasic from 'utils/api/header/languageBasic';
import Major from 'utils/api/header/major';
import OtherUncheckedClass from 'utils/api/header/otherUncheckedClass';
import ScienceBasic from 'utils/api/header/scienceBasic';

async function callGraduateApi(
  courseFile: File | null,
  majorValue: string | undefined,
) {
  if (courseFile === null) {
    alert('성적표 파일을 업로드 해주세요');
    return;
  }
  if (majorValue === null || majorValue === undefined) {
    alert('학과를 선택해주세요');
    return;
  }
  const result = await getResult(courseFile, majorValue);
  console.log(result.etcMandatory);
}

export default callGraduateApi;
