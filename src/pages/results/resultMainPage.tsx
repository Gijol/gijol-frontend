import BasicResult from 'utils/api/basic';
import Result from 'utils/api/result';

interface IProps {
  _result: Result;
}

const ResultMainPage = function ResultMainPage({
  _result,
}: IProps): JSX.Element {
  const result = _result as Result;
  const majorObj = result.major as BasicResult;

  return (
    <div>
      <div>결과 페이지 입니다.</div>
    </div>
  );
};

export default ResultMainPage;
