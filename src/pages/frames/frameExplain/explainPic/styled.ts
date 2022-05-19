import styled, { keyframes } from 'styled-components';

// const fadeIn = keyframes`
//   from {
//         opacity: 0;
//     }
//     to {
//         opacity: 1;
//     }
// `;
// const fadeOut = keyframes`
//   from {
//         opacity: 1;
//     }
//     to {
//         opacity: 0;
//     }
// `;

const ExplainDrawerPicContainer = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  box-shadow: 0 0 20px -6px gray;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .explainPicContainer {
    width: 688px;
    height: 377px;
  }
`;

const ExplainPic = styled.img`
  border-radius: 10px;
`;
export { ExplainDrawerPicContainer, ExplainPic };
