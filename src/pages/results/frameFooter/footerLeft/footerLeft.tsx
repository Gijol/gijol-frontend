import { FooterLeftWrapper, NavBox } from './styles';


const FooterLeftContainer = function FooterLeftContainer(): JSX.Element {
  return (
    <FooterLeftWrapper>
      <div className="footer-left">
        <NavBox>
          <div className="bold-title">서비스</div>
          <div className="items">
            <a className="link" href="/" target="_blank">
              공지사항
            </a>
          </div>
          <div className="items">
            <a className="link" href="/" target="_blank">
              자주 묻는 질문
            </a>
          </div>
        </NavBox>
        <NavBox>
          <div className="bold-title">문의</div>
          <div className="items">
            <a className="link" href="/" target="_blank">
              Gijol Support
            </a>
          </div>
          <div className="items">
            <a className="link" href="/" target="_blank">
              피드백 문의
            </a>
          </div>
        </NavBox>
      </div>
      <div className="footer-left">
        <NavBox>
          <div className="bold-title">문의</div>
          <div className="items">
            <a className="link" href="/" target="_blank">
              Gijol Support
            </a>
          </div>
          <div className="items">
            <a className="link" href="/" target="_blank">
              피드백 문의
            </a>
          </div>
        </NavBox>
        <NavBox>
          <div className="bold-title">About</div>
          <div className="items">
            <a className="link" href="/" target="_blank">
              Gijol members
            </a>
          </div>
        </NavBox>
      </div>
    </FooterLeftWrapper>
  );
};

export default FooterLeftContainer;
