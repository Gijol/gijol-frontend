import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > .container {
    max-width: ${(props) => props.theme.basicWidth};
    width: 100%;
    height: 35em;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    /* background-color: aqua; */
  }
`;
