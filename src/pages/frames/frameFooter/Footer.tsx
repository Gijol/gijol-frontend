import React from 'react';
import './styles.css';

const Footer = function Footer(): JSX.Element {
  return (
    <div className="BiggerContainer">
      <div className="FooterContainer">
        <div className="FooterNav">
          <div className="Nav1">
            <div className="BoldTitle">서비스</div>
            <p>
              <a className="link" href="/" target="_blank">
                공지사항
              </a>
            </p>
            <p>
              <a className="link" href="/" target="_blank">
                자주 묻는 질문
              </a>
            </p>
          </div>
          <div className="Nav1">
            <div className="BoldTitle">문의</div>
            <p>
              <a className="link" href="/" target="_blank">
                Gijol 프로젝트 지원
              </a>
            </p>
            <p>
              <a className="link" href="/" target="_blank">
                피드백 문의
              </a>
            </p>
          </div>
          <div className="Nav1">
            <div className="BoldTitle">서비스</div>
            <p className="link">Gijol 이메일: Gijol@gmail.com</p>
            <p className="link">Github 주소: blablabla</p>
          </div>
        </div>
        <div className="MessageAndLogo">
          <div className="Message">
            얼마 남지 않았네요
            <br />
            졸업까지 파이팅 입니다!
          </div>
          <div className="Logo">Gijol</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
