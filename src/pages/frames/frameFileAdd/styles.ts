import styled from 'styled-components';

const FileAdd = styled.section`
  max-width: ${(props) => props.theme.basicWidth};
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;
`;

const FileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
export { FileAdd, FileContainer, LoadingModal };
