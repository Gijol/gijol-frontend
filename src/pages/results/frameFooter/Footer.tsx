import { FooterContainer } from './styles';
import FooterLeftContainer from './footerLeft/footerLeft';
import FooterRightContainer from './footerRight/footerRight';

const Footer = function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <div className="container">
        <FooterLeftContainer />
        <FooterRightContainer />
      </div>
    </FooterContainer>
  );
};

export default Footer;
