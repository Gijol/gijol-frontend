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
            <a
              href="https://choieungi-project.notion.site/9d6da8d46acb4b4eb35d677c05cae256"
              rel="noreferrer"
              target="_blank"
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              공지사항
            </a>
          </li>
          <li>
            <a
              href="https://choieungi-project.notion.site/Q-A-9e325eabef4e479a8f47e95eb90bb344"
              rel="noreferrer"
              target="_blank"
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              자주 묻는 질문
            </a>
          </li>
        </ul>
      </MenuDrawer>

      <MenuDrawer>
        <div className="menu-title">About</div>
        <ul>
          <li className="sub">
            <a
              href="https://choieungi-project.notion.site/Team-Gijol-e5e279e91a0646c2a84b548873601a3f"
              rel="noreferrer"
              target="_blank"
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Team Gijol
            </a>
          </li>
        </ul>
      </MenuDrawer>
    </IntroduceConatiner>
  );
};

export default MobileFooterContainer;
