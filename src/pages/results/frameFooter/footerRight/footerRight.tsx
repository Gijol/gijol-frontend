import { FooterRightWrapper } from './styles';

const FooterRightContainer = function FooterRightContainer(): JSX.Element {
  return (
    <FooterRightWrapper>
      <div className="message">
        얼마 남지 않았네요,
        <br />
        <span className="bold">졸업</span>까지 파이팅 입니다!
      </div>
      <div className="logo">Gijol</div>
    </FooterRightWrapper>
  );
};
export default FooterRightContainer;
