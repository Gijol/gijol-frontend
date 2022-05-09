import Header from 'common/header/header';
import { useLocation } from 'react-router';

const ResultPage = function ResultPgae(): JSX.Element {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      {/* <Header /> */}
      <div>결과 페이지 입니다.</div>
      {/* <div>{state.toStirng}</div> */}
    </>
  );
};

export default ResultPage;
