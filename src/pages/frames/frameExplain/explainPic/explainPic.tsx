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
        <ExplainPic src={explainPic1} alt="제우스 로그인 창" />
      ) : null}

      {stepNum === 2 ? (
        <ExplainPic src={explainPic2} alt="개인 성적 조회" />
      ) : null}

      {stepNum === 3 ? (
        <ExplainPic src={explainPic3} alt="수강목록, 엑셀 파일로 저장" />
      ) : null}

      {stepNum === 4 ? (
        <ExplainPic src={explainPic4} alt="Gijol에 업로드 하기" />
      ) : null}
    </ExplainDrawerPicContainer>
  );
};

export default ExplainDrawerPic;
