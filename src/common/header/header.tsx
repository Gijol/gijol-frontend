import styled from 'styled-components';
import {
  Space,
  Logo,
  HeaderContainer,
  LogoContainer,
  HeaderWrapper,
} from './styles';
import Navi from './navigation';

const Header = function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo>Gijol</Logo>
        </LogoContainer>
        <Space />
        <Navi />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
