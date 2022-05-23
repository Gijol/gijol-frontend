import styled, { css, keyframes } from 'styled-components';

const open = keyframes`
  to{
    opacity: 1;
  }
  from{
    opacity: 0;
  }
`;
const close = keyframes`
  to{
    opacity: 0;
  }
  from{
    opacity: 1;
  }
`;
const movesmall = keyframes`
  to {
    height: 0em;
  }
  from{
    height: 15em;
  }
`;
const movelarge = keyframes`
  to{
    height: 15em;
  }
  from{
    height: 0em;
  }
`;

const bounce = keyframes`
  0%, 20%, 100% {
    bottom: 50px;
    animation-timing-function: ease-out;
  }

  10%{
    bottom: 60px;
    animation-timing-function: ease-in; 
  }
 `;
interface IProps {
  isClick: boolean;
}
export const FeedBackBtn = styled.div`
  width: 4em;
  height: 4em;
  z-index: 10;
  border-radius: 1em;
  position: fixed;
  bottom: 35px;
  right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  cursor: pointer;
  box-shadow: #495c4f33 0px 4px 6px, #495c4f33 0px 8px 30px,
    #495c4f33 0px 0px 0px 1px inset !important;

  animation: ${({ isClick }: IProps) => {
    return !isClick
      ? css`
          ${bounce} 2.5s cubic-bezier(0.19, 1, 0.22, 1) infinite
        `
      : '';
  }};
`;

export const FeedBackChannel = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 1em;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 10;

  background-color: rgba(250, 250, 250, 0.9);
  backdrop-filter: blur(60px);
  box-shadow: #495c4f33 0px 6px 8px, #495c4f33 0px 6px 50px,
    #495c4f33 0px 0px 4px 1px inset !important;
  > .feedback-inner {
    animation: ${open} 1s;

    display: flex;
    margin-left: 0.8em;
    margin-right: 0.8em;
    flex-direction: column;
    > .header-flex {
      margin-left: 0.3em;
      margin-right: 0.3em;

      display: flex;
      align-items: center;
      justify-content: space-between;

      > .feedback-header {
        margin-top: 1em;
        margin-bottom: 1em;
        font-weight: 600;
        letter-spacing: 0.01em;
      }
      > .close {
        width: 20px;
        height: 20px;
      }
    }

    > .margin-feedback-head {
      margin-left: 0.3em;
      margin-right: 0.3em;
    }

    > .feedback-header-text {
      color: rgba(0, 0, 0, 0.4);
      font-size: 1em;
      line-height: 1.2rem;
    }
  }
`;
export const FeedbackTextContainer = styled.div`
  width: 17em;
  margin-top: 1em;
  height: fit-content;
  border-radius: 18px;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 10%) 1px 4px 17px 2px;

  margin-bottom: 1em;

  > .clicked {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .input-container {
      width: 90%;
      resize: none;
      padding-left: 0.5em;
      padding-right: 0.5em;
      padding-top: 1em;
      height: 15em;
      margin-top: 1em;
      margin-bottom: 1em;
      border: none;
      border-radius: 20px;
      background-color: #ecebeb;
      animation: ${movelarge} 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    }
    > textarea:focus {
      outline: 1px solid #0bab3bea;
    }

    > .not-clicked-desc-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1.5em;
      margin-bottom: 1em;
      width: 85%;
      letter-spacing: -0.1px;
      font-size: 0.9rem;
    }
    > .unpressed {
      animation: ${movesmall} 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    }
    > .button-container {
      display: flex;
      width: 100%;
      justify-content: center;
      margin-top: 0.5em;
      margin-bottom: 1em;

      > .btn-inner {
        width: 90%;
        height: 3em;
        border-radius: 13px;
        display: flex;
        color: white;
        align-items: center;
        justify-content: center;
        background-color: #0bab3bea;
        cursor: pointer;
      }
    }
  }
`;
