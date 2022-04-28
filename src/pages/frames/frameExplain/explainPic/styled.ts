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
export default ExplainDrawerPicContainer;
