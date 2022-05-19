import { useState } from 'react';
import BasicResult from 'utils/api/basic';
import { RecommendBoxContainer } from './styles';

interface IProps {
  name: string;
  colorCode: string;
  result: BasicResult;
}
const RecommendBox = function RecommendBox({
  name,
  colorCode,
  result,
}: IProps): JSX.Element {
  const [isClicked, clickController] = useState<boolean>(false);

  const toggleClick = () => {
    console.log('clicked');
    if (isClicked === true) {
      clickController(false);
    } else {
      clickController(true);
    }
  };

  return (
    <RecommendBoxContainer color={colorCode}>
      <div
        className={
          isClicked
            ? 'upper-recommend-box button-unpressed'
            : 'upper-recommend-box button-pressed'
        }
      />
      <div
        className={
          isClicked
            ? 'main-recommend-box button-pressed'
            : 'main-recommend-box button-unpressed'
        }
        role="button"
        aria-hidden
        tabIndex={0}
        onClick={toggleClick}
      >
        <div className="recommend-title">{name}</div>
        <div className="recommend-title-header-container">
          {isClicked
            ? '수강 추천 과목'
            : '여기를 눌러 Gijol의 추천 강의를 확인하세요'}
        </div>

        {isClicked ? (
          <>
            <div className="recommend-middle">
              {result.getMessages.length >= 1 ? (
                <div className="message-container">
                  {' '}
                  {result.getMessages.map((message: string, index: number) => {
                    return <div key={message.length}>{message}</div>;
                  })}
                </div>
              ) : (
                <div className="message-all-pass">전부 다 수강하셨습니다!</div>
              )}
            </div>
            <div className="recommend-footer">
              {result.isSatisfied
                ? '전부 다 들으셨습니다!'
                : 'Gijol의 추천 강의 입니다'}
            </div>
          </>
        ) : null}
      </div>
    </RecommendBoxContainer>
  );
};

export default RecommendBox;
