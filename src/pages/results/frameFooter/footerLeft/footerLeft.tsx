import { FooterLeftWrapper, NavBox } from './styles';

const FooterLeftContainer = function FooterLeftContainer(): JSX.Element {
  return (
    <FooterLeftWrapper>
      <div className="footer-left">
        <NavBox>
          <div className="bold-title">서비스</div>
          <div className="items">
            <a
              className="link"
              href="https://choieungi-project.notion.site/9d6da8d46acb4b4eb35d677c05cae256"
              rel="noreferrer"
              target="_blank"
            >
              공지사항
            </a>
          </div>
          <div className="items">
            <a
              className="link"
              href="https://choieungi-project.notion.site/Q-A-9e325eabef4e479a8f47e95eb90bb344"
              rel="noreferrer"
              target="_blank"
            >
              자주 묻는 질문
            </a>
          </div>
        </NavBox>
        <NavBox>
          <div className="bold-title">About</div>
          <div className="items">
            <a
              className="link"
              href="https://github.com/Gijol"
              target="_blank"
              rel="noreferrer"
            >
              Gijol Github
            </a>
          </div>
          <div className="items">
            <a
              className="link"
              href="https://choieungi-project.notion.site/Team-Gijol-e5e279e91a0646c2a84b548873601a3f"
              rel="noreferrer"
              target="_blank"
            >
              Team Gijol
            </a>
          </div>
        </NavBox>
      </div>
    </FooterLeftWrapper>
  );
};

export default FooterLeftContainer;
