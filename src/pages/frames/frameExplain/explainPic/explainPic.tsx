import explainPic1 from 'assets/img/explainPic1.png';
import explainPic2 from 'assets/img/explainPic2.png';
import explainPic3 from 'assets/img/explainPic3.png';
import explainPic4 from 'assets/img/explainPic4.png';

import { ExplainDrawerPicContainer, ExplainPic } from './styled';

interface IProps {
  stepNum: number;
}

const ExplainDrawerPic = function ExplainDrawerPic({
  stepNum,
}: IProps): JSX.Element {
  return (
    <ExplainDrawerPicContainer>
      {stepNum === 1 ? (
        <div className="explainPicContainer">
          <ExplainPic src={explainPic1} alt="제우스 로그인 창" />
        </div>
      ) : null}

      {stepNum === 2 ? (
        <div className="explainPicContainer">
          <ExplainPic src={explainPic2} alt="개인 성적 조회" />
        </div>
      ) : null}

      {stepNum === 3 ? (
        <div className="explainPicContainer">
          <ExplainPic src={explainPic3} alt="수강목록, 엑셀 파일로 저장" />
        </div>
      ) : null}

      {stepNum === 4 ? (
        <div className="explainPicContainer">
          <ExplainPic src={explainPic4} alt="Gijol에 업로드 하기" />
        </div>
      ) : null}
    </ExplainDrawerPicContainer>
  );
};

export default ExplainDrawerPic;
