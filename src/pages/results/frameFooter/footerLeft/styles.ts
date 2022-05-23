import styled from 'styled-components';

export const FooterLeftWrapper = styled.div`
  display: flex;
  > .footer-left {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 2em;
    margin-right: 1em;
  }
`;

export const NavBox = styled.div`
  height: 11em;
  display: flex;
  flex-direction: column;

  > .bold-title {
    color: ${(props) => props.theme.color.sub};
    font-size: 1.5em;
    font-weight: 500;
    margin-bottom: 0.2em;
  }
  > .items {
    margin-top: 0.6em;
    margin-bottom: 0.6em;

    > .link {
      text-decoration: none;
      color: ${(props) => props.theme.color.main};
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
