import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 30em;
  display: flex;
  margin-top: 150px;
  flex-direction: column;
  background-color: #e5e8eb;

  justify-content: center;

  > .container {
    max-width: ${(props) => props.theme.basicWidth};
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;
