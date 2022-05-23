import Header from 'common/header/header';
import { useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

import Result from 'utils/api/result';
import callGraduateApi from 'utils/api/call/pushBtnApi';

import Overall from './results/frameOverall/Overall';
import Specific from './results/frameSpecific/Specific';
import Recommend from './results/frameRecommend/Recommend';
import Footer from './results/frameFooter/Footer';

import { LoadingModal } from './styles';
import FeedBackContainer from './results/feedBack/feedback';

interface apiProps {
  apiFile: File;
  apiCode: string;
  result: Result;
}
const ResultPage = function ResultPgae(): JSX.Element {
  const { state } = useLocation();
  const navigate = useNavigate();

  const apiState = state as apiProps;
  const [result, setResult] = useState<Result | null>();

  const redirect = (msg: string) => {
    alert(msg);
    navigate('/');
  };

  useEffect(() => {
    try {
      const { apiFile, apiCode }: { apiFile: File; apiCode: string } = apiState;
      callGraduateApi(apiFile, apiCode)
        .then((value: any) => {
          setResult(value);
        })
        .catch((error: any) => {
          if (error.response.status === 415) {
            redirect('정확한 성적표를 업로드 해주세요');
          } else if (error.response.status === 405) {
            redirect('죄송합니다. 현재 18학번부터 서비스를 제공하고 있습니다.');
          } else {
            redirect('시스템 오류입니다.');
          }
          console.log(error);
        });
    } catch {
      redirect('잘못된 접근입니다');
    }
  }, []);

  return (
    <div>
      {result === null || result === undefined ? (
        <LoadingModal>
          <div className="loading-modal-container">
            <div style={{ textAlign: 'center' }}>
              Gijol이 일하는 중! <br /> 잠시만 기다려주세요
            </div>
          </div>
        </LoadingModal>
      ) : (
        <>
          <FeedBackContainer />
          <div>
            <Header />
            <Overall result={result} />
            <Specific result={result} />
            <Recommend result={result} />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default ResultPage;
