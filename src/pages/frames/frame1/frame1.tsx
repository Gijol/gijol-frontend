import { FrameContainer, Blur, Title } from './styles';
import ButtonContainer from './buttonBox/buttons';

interface IFace {
  goToNext: () => void;
  goToLast: () => void;
}
const MainFrame = function MainFrame({
  goToNext,
  goToLast,
}: IFace): JSX.Element {
  return (
    <FrameContainer>
      <Blur />
      <Title>
        졸업요건 <br />
        Gijol에서 간단하게 확인하세요.
      </Title>
      <ButtonContainer goToLast={goToLast} goToNext={goToNext} />
    </FrameContainer>
  );
};

export default MainFrame;
