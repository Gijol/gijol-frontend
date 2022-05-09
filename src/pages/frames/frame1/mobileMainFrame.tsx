import { FrameContainer, Blur } from './styles';
import MobileTitle from 'common/title/mobileTitle';
import ButtonContainer from './buttonBox/buttons';

const MainFrame = function MainFrame(): JSX.Element {
  return (
    <FrameContainer>
      <Blur />
      <MobileTitle>
        <span style={{ color: '#1DAA47' }}>졸업요건</span> <br />
        Gijol에서 간단하게 확인하세요.
      </MobileTitle>
      <ButtonContainer />
    </FrameContainer>
  );
};

export default MainFrame;
