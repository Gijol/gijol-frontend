import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const fadeOut = keyframes`
  from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const ExplainDrawerPicContainer = styled.div`
  width: 60%;
  height: 100px;
  > .image-fade-in {
    animation: ${fadeIn} 0.5s;
    height: 100%;
    font-size: 30px;
  }
  > .image-fade-out {
    animation: ${fadeOut} 0.5s;
    height: 0px;
    font-size: 0px;
  }
  > .image-default {
    width: 95%;
    background-color: blue;
  }
`;
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
