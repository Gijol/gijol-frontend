import styled from 'styled-components';

const MobileMainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const MobileHeader = styled.div`
  /* width: 100%; */
  height: 2em;
  margin-top: 1em;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 0.6em;
  margin-left: 1em;
  > .logo {
    font-weight: 600;
    font-size: 24px;
  }
  > .qna-btn {
    border-radius: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5em;
    height: 2.4em;
    background-color: ${(props) => props.theme.color.sub};
  }
`;

export { MobileHeader, MobileMainContainer };
