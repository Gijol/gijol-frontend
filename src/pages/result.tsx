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

interface apiProps {
  apiFile: File;
  apiCode: string;
}
const ResultPage = function ResultPgae(): JSX.Element {
  const { state } = useLocation();
  const navigate = useNavigate();

  const apiState = state as apiProps;

  const [result, setResult] = useState<Result>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      const { apiFile, apiCode }: { apiFile: File; apiCode: string } = apiState;
      setLoading(true);
      callGraduateApi(apiFile, apiCode)
        .then((value: any) => {
          setResult(value);
          console.log(value);
          setLoading(false);
        })
        .catch((e: any) => {
          alert('정확한 성적표를 업로드 해주세요');
          navigate('/gijol-frontend/');
        });

    } catch (e: any) {
      alert('잘못된 접근입니다!');
      navigate('/gijol-frontend/');
    }
  }, []);
  // console.log(state.apiFile);

  return (
    <>
      <Header />
      {isLoading ? (
        <LoadingModal>
          <div className="loading-modal-container">
            <div style={{ textAlign: 'center' }}>
              Gijol이 일하는 중! <br /> 잠시만 기다려주세요
            </div>
          </div>
        </LoadingModal>
      ) : (
        <div>
          <Overall />
          <Specific />
          <Recommend />
          <Footer />
        </div>
      )}
    </>
  );
  // return <ResultMainPage _result={result} />;
};

export default ResultPage;
