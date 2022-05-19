import styled from 'styled-components';
import { IntroduceConatiner } from './styles';

const FooterTitle = styled.div`
  font-size: 28px;
  margin-top: 1.8em;
  font-weight: 600;
  line-height: 1.2em;
  text-shadow: 1px 1px 1px lightgray;
`;

const MenuDrawer = styled.div`
  height: 3.5em;
  margin-top: 3em;

  > .menu-title {
    font-size: 1.4em;
    font-weight: 500;
    color: #1daa47;
  }
  > ul {
    > li {
      list-style-type: none;
      margin-top: 0.3em;
    }
  }

  > .sub {
    text-decoration: none;
  }
`;
const MobileFooterContainer = function MobileFooterContainer(): JSX.Element {
  return (
    <IntroduceConatiner>
      <FooterTitle>
        졸업까지, <br /> 화이팅입니다.
      </FooterTitle>
      <MenuDrawer>
        <div className="menu-title">서비스</div>
        <ul>
          <li className="sub">
            <div>공지사항</div>
          </li>
          <li>
            <div>자주 묻는 질문</div>
          </li>
        </ul>
      </MenuDrawer>
      <MenuDrawer>
        <div className="menu-title">문의</div>
        <ul>
          <li className="sub">
            <div>Gijol Support</div>
          </li>
          <li>
            <div>피드백</div>
          </li>
        </ul>
      </MenuDrawer>
      <MenuDrawer>
        <div className="menu-title">About</div>
        <ul>
          <li className="sub">
            <div>Team. Gijol</div>
          </li>
        </ul>
      </MenuDrawer>
    </IntroduceConatiner>
  );
};

export default MobileFooterContainer;
