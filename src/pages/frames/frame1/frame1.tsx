import { FrameContainer, Blur, Title } from './styles';
import ButtonContainer from './buttonBox/buttons';

const MainFrame = function MainFrame(): JSX.Element {
  return (
    <FrameContainer>
      <Blur />
      <Title>
        <span style={{ color: '#1DAA47' }}>졸업요건</span> <br />
        Gijol에서 간단하게 확인하세요.
      </Title>
      <ButtonContainer />
    </FrameContainer>
  );
};

export default MainFrame;
