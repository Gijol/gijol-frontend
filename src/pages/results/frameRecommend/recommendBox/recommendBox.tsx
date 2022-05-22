import React, { useState } from 'react';
import BasicResult from 'utils/api/basic';
import { RecommendBoxContainer } from './styles';
import 'swiper/css';

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

  const toggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('clicked');
    if (isClicked === true) {
      clickController(false);
    } else {
      clickController(true);
    }
  };

  return (
    <RecommendBoxContainer color={colorCode} className="recommend-container">
      <div
        className={
          isClicked
            ? 'upper-recommend-box button-unpressed'
            : 'upper-recommend-box button-pressed'
        }
      />
      <div
        draggable={false}
        className={
          isClicked
            ? 'main-recommend-box button-pressed swiper-no-swiping'
            : 'main-recommend-box button-unpressed swiper-no-swiping'
        }
        role="button"
        aria-hidden
        tabIndex={-1}
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
            <div draggable={false} className="recommend-middle">
              {result.getMessages.length >= 1 ? (
                <div className="message-container">
                  <ul className="message-list">
                    {' '}
                    {result.getMessages.map(
                      (message: string, index: number) => {
                        return (
                          <li className="message-single" key={message.length}>
                            <div key={message.length}>{message}</div>
                          </li>
                        );
                      },
                    )}
                  </ul>
                </div>
              ) : (
                <div
                  className="message-all-pass"
                  style={{ color: '#3c4149', fontSize: '20px' }}
                >
                  전부 다 수강하셨습니다!
                </div>
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
