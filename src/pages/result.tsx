import Header from 'common/header/header';
import { useLocation } from 'react-router';
import Overall from './frames/frameOverall/Overall';
import Specific from './frames/frameSpecific/Specific';
import Recommend from './frames/frameRecommend/Recommend';
import Footer from './frames/frameFooter/Footer';

const ResultPage = function ResultPgae(): JSX.Element {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      {/* <Header /> */}
      <div>
        <Overall />
        <Specific />
        <Recommend />
        <Footer />
      </div>
      {/* <div>{state.toStirng}</div> */}
    </>
  );
};

export default ResultPage;
