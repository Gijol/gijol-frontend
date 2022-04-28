import ExplainDrawerPicContainer from './styled';

interface IProps {
  stateNum: number;
}

const ExplainDrawerPic = function ExplainDrawerPic({
  stateNum,
}: IProps): JSX.Element {
  return (
    <ExplainDrawerPicContainer>
      <div
        className={
          stateNum === 1
            ? 'image-fade-in image-default'
            : 'image-fade-out image-default'
        }
      >
        1번 이미지
      </div>
      <div
        className={
          stateNum === 2
            ? 'image-fade-in image-default'
            : 'image-fade-out image-default'
        }
      >
        2번 이미지
      </div>
      <div
        className={
          stateNum === 3
            ? 'image-fade-in image-default'
            : 'image-fade-out image-default'
        }
      >
        3번 이미지
      </div>
      <div
        className={
          stateNum === 4
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
