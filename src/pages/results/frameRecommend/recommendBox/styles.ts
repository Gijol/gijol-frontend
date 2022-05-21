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
  width: 432px;
  display: block;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  box-shadow: 0 2px 20px -6px gray;

  @media (max-width: 1440px) {
    width: 346px;
    height: 400px;
  }

  > .upper-recommend-box {
    width: 100%;
    /* height: 100%; */
    border-radius: 20px;
  }
  > .button-pressed {
    animation: ${toggleOn} 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    height: 85%;
  }
  > .button-unpressed {
    animation: ${toggleOff} 0.4s cubic-bezier(0.19, 1, 0.22, 1);
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
      left: 0.8em;
      color: #fff;
      top: -1.8em;
      font-size: 1.8em;
      font-weight: 600;
      letter-spacing: 1.4;
    }

    @media (max-width: 1440px) {
      .recommend-title {
        font-size: 1.4em;
      }
    }
    > .recommend-middle {
      > div {
        font-size: 20px;
        font-weight: 600;
        color: gray;
        text-align: center;
      }

      > .message-all-pass {
        line-height: 275px;
        height: 275px;
        opacity: 0;
        animation: text-appear-from-down 0.4s linear forwards;
      }

      @media (max-width: 1440px) {
        .message-all-pass {
          line-height: 220px;
          height: 220px;
        }
      }

      > .message-container {
        overflow: hidden;
        width: 100%;
        height: 275px;
        opacity: 0;
        animation: text-appear-from-down 0.4s linear forwards;
      }

      @media (max-width: 1440px) {
        .message-container {
          height: 220px;
        }
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
      opacity: 0;
      animation: text-appear-from-down 0.4s linear forwards;
    }

    @media (max-width: 1440px) {
      .recommend-title-header-container {
        height: 60px;
      }
      .recommend-footer {
        height: 60px;
      }
    }

    @keyframes text-appear-from-down {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
