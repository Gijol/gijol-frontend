import { useState } from 'react';
import styled from 'styled-components';

// import React from 'react';

const Header = function Header(): JSX.Element {
  const HeaderContainer = styled.div`
    max-width: ${(props) => props.theme.basicWidth};
    height: 64px;
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
    font-size: 48px;
    letter-spacing: 0px;
    line-height: 1.2;
  `;

  return (
    <HeaderContainer>
      <div>
        <Logo>Gijol</Logo>
      </div>
    </HeaderContainer>
  );
};

export default Header;
