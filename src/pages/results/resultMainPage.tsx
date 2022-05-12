import { type } from 'os';
import BasicResult from 'utils/api/basic';
import EtcMandatory from 'utils/api/header/etcMandatory';
import LanguageBasic from 'utils/api/header/languageBasic';
import Result from 'utils/api/result';

interface IProps {
  _result: Result;
}

const ResultMainPage = function ResultMainPage({
  _result,
}: IProps): JSX.Element {
  const result = _result as Result;
  const majorObj = result.major as BasicResult;
  console.log(majorObj.getTotalCredits);
  return (
    <div>
      <div>결과 페이지 입니다.</div>
    </div>
  );
};

export default ResultMainPage;
