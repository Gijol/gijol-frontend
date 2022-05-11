import { useLocation } from 'react-router-dom';
import Result from 'utils/api/result';
import ResultMainPage from './results/resultMainPage';

interface iLocation {
  apiResult: Result;
}
const ResultPage = function ResultPgae(): JSX.Element {
  const location = useLocation();
  console.log(location);
  return <div>결과</div>;
  // return <ResultMainPage _result={result} />;
};

export default ResultPage;
