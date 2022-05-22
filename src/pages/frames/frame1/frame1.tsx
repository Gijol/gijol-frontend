import { TitleContainer, FrameContainer, Blur, Title } from './styles';
import ButtonContainer from './buttonBox/buttons';

const MainFrame = function MainFrame(): JSX.Element {
  return (
    <FrameContainer>
      <Blur />
      <TitleContainer>
        <Title>
          <span style={{ color: '#1DAA47', userSelect: 'none' }}>졸업요건</span>{' '}
          <br />
          <span style={{ userSelect: 'none' }}>
            Gijol에서 간단하게 확인하세요
          </span>
        </Title>
        <ButtonContainer />
      </TitleContainer>
    </FrameContainer>
  );
};

export default MainFrame;
