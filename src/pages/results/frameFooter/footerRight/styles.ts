import styled from 'styled-components';

export const FooterRightWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > .message {
    font-size: 3em;
    line-height: 1.4;
    font-weight: 500;

    > .bold {
      color: ${(props) => props.theme.color.sub};
    }
  }
  > .logo {
    margin-top: 40px;
    font-size: 7em;
    font-weight: 300;
  }
`;
