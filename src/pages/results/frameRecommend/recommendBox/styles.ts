import styled, { keyframes } from 'styled-components';

const toggleOn = keyframes`
  0% {
    height: 15%;
  }

  100% {
    height: 85%;
  }
`;

const toggleOff = keyframes`
  0% {
    height: 85%;
  }

  100% {
    height: 15%;
  }
`;

export const RecommendBoxContainer = styled.div`
  width: 346px !important;
  display: block;
  width: 100%;
  height: 400px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  box-shadow: 0 2px 20px -6px gray;

  > .upper-recommend-box {
    width: 100%;
    /* height: 100%; */
    border-radius: 20px;
  }
  > .button-pressed {
    animation: ${toggleOn} 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    height: 85%;
  }
  > .button-unpressed {
    animation: ${toggleOff} 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    height: 15%;
  }
  > .main-recommend-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    font-weight: 400;
    font-style: normal;
    color: #000000;
    letter-spacing: 0px;
    line-height: 1.2;
    background-color: #fff;
    border-radius: 20px;
    white-space: pre;

    /* overflow: hidden; */
    > .recommend-title-header-container {
      width: 100%;
      height: 75px;
      display: flex;
      border-radius: 20px;
      font-style: normal;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }

    > .recommend-title {
      z-index: 10;
      position: absolute;
      left: 0.9em;
      color: #fff;
      top: -1.9em;
      font-size: 1.7em;
      font-weight: 600;
      letter-spacing: 1.4;
    }
    > .recommend-middle {
      flex: 1 1 0;

      > div {
        font-size: 20px;
        font-weight: 600;
        color: gray;
        text-align: center;
      }

      > .message-all-pass {
        line-height: 250px;
      }

      > .message-container {
        line-height: 2em;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
    }
    > .recommend-footer {
      width: 100%;
      height: 75px;
      display: flex;
      border-radius: 20px;
      font-style: normal;
      align-items: center;
      justify-content: center;
      background-color: #f1f4f6;
      font-weight: 600;
    }
  }
`;
