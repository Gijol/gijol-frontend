import ExplainDrawerPicContainer from './styled';

interface IProps {
  stepNum: number;
}

const ExplainDrawerPic = function ExplainDrawerPic({
  stepNum,
}: IProps): JSX.Element {
  return (
    <ExplainDrawerPicContainer>
      <div
        className={
          stepNum === 1
            ? 'image-fade-in image-default'
            : 'image-fade-out image-default'
        }
      >
        1번 이미지
      </div>
      <div
        className={
          stepNum === 2
            ? 'image-fade-in image-default'
            : 'image-fade-out image-default'
        }
      >
        2번 이미지
      </div>
      <div
        className={
          stepNum === 3
            ? 'image-fade-in image-default'
            : 'image-fade-out image-default'
        }
      >
        3번 이미지
      </div>
      <div
        className={
          stepNum === 4
            ? 'image-fade-in image-default'
            : 'image-fade-out image-default'
        }
      >
        4번 이미지
      </div>
    </ExplainDrawerPicContainer>
  );
};

export default ExplainDrawerPic;
