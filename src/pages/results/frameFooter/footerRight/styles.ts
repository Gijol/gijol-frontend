import styled from 'styled-components';

export const FooterRightWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > .message {
    font-size: 3.5em;
    line-height: 1.4;
    font-weight: 700;

    > .bold {
      color: ${(props) => props.theme.color.sub};
    }
  }
  > .logo {
    font-size: 10em;
    font-weight: 300;
  }
`;
