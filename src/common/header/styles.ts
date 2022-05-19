import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 100;
  position: fixed;
  border-bottom: 0.7px solid rgba(0, 0, 0, 0.25);
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
`;

const HeaderContainer = styled.div`
  max-width: ${(props) => props.theme.basicWidth};
  height: 48px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
`;

const Logo = styled.span`
  white-space: pre;
  font-weight: 400;
  font-style: normal;
  color: ${(props) => props.theme.color.main};
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 1.2;
`;

const Space = styled.div`
  flex: 1 1 0;
`;

const RightNav = styled(Link)`
  text-decoration: none;
  padding-left: 20px;
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 1.2;
  font-weight: 400;
  color: ${(props) => props.theme.color.main};
`;

const MobileHeader = styled.div`
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

export {
  MobileHeader,
  RightNav,
  Space,
  Logo,
  HeaderContainer,
  LogoContainer,
  HeaderWrapper,
};
