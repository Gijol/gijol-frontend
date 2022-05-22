import { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import Close from 'assets/img/close.png';
import { FeedBackBtn, FeedBackChannel, FeedbackTextContainer } from './styles';

const FeedBackContainer = function FeedBackContainer(): JSX.Element {
  const [isClicked, setClicked] = useState<boolean>(false);
  const [innerClicked, setInnerClicked] = useState<boolean>(false);
  const [data, setData] = useState<string | null>(null);
  let onceUsed = false;

  const clickTrue = () => {
    setClicked(true);
  };
  const clickFalse = () => {
    setClicked(false);
    setInnerClicked(false);
    setData(null);
  };
  const clickInnerTrue = () => {
    console.log('inner');
    setInnerClicked(true);
  };

  const submit = () => {
    onceUsed = true;
    if (data === null || data === '') {
      alert('내용을 입력해 주세요');
      return;
    }
    setInnerClicked(false);
    axios
      .post('https://dev-api.gijol.im/graduation/feedback', { message: data })
      .then(() => {
        alert('감사합니다!');
        setData(null);
      })
      .catch(() => {
        alert('에러 발생');
      });
  };
  return (
    <div>
      {isClicked ? (
        <FeedBackChannel>
          <div className="feedback-inner">
            <div className="header-flex">
              <div className="feedback-header margin-feedback-head">
                🎓 Gijol Rocket
              </div>
              <img
                onKeyDown={() => {
                  console.log();
                }}
                onClick={() => {
                  clickFalse();
                }}
                className="close"
                src={Close}
                alt="X"
              />
            </div>

            <div className="feedback-header-text margin-feedback-head">
              Gijol Rocket 피드백
              <br />
              빠르게 평가해보세요
            </div>
            <FeedbackTextContainer>
              <div className="clicked">
                <div className="not-clicked-desc-container">
                  반가워요, Gijol 서비스는 어떠셨나요? 당신의 목소리를 Gijol에
                  퍼뜨려주세요!
                </div>
                {innerClicked ? (
                  <>
                    <textarea
                      name="feedback"
                      className="input-container"
                      placeholder="Gijol에 바라는 점이나 개선할 점을 자유롭게 적어주세요!"
                      onChange={(event) => setData(event.target.value)}
                    />
                    <div className="button-container">
                      <div
                        className="btn-inner"
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => {
                          console.log();
                        }}
                        onClick={() => {
                          submit();
                        }}
                      >
                        제출하기
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {onceUsed ? <div className="unpressed" /> : null}
                    <div className="button-container">
                      <div
                        id="btn-submit"
                        className="btn-inner"
                        role="button"
                        tabIndex={0}
                        onKeyDown={() => {
                          console.log();
                        }}
                        onClick={() => {
                          clickInnerTrue();
                        }}
                      >
                        피드백 하기
                      </div>
                    </div>
                  </>
                )}
              </div>
            </FeedbackTextContainer>
          </div>
        </FeedBackChannel>
      ) : (
        <FeedBackBtn
          onClick={() => {
            clickTrue();
          }}
        >
          🎓
        </FeedBackBtn>
      )}
    </div>
  );
};

export default FeedBackContainer;
//
