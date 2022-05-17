import styled from 'styled-components';

const FrameContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  background-color: white;
  max-width: ${(props) => props.theme.basicWidth};
`;

const MainContainer = styled.div`
  background-color: white;
  width: 100%;
`;

const LoadingModal = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  > .loading-modal-container {
    width: 300px;
    height: 120px;
    border-radius: 5px;
    font-weight: 600;
    color: ${(props) => props.theme.color.sub};
    background-color: white;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export { LoadingModal, MainContainer, FrameContainer };
