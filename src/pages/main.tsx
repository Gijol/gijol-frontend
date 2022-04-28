import Header from 'common/header/header';
import MainFrame from './frames/frame1/frame1';
import ExplanationFrame from './frames/frameExplain/Explanation';
import FrameContainer from './styles';

const Main = function Main(): JSX.Element {
  return (
    <>
      <Header />
      <FrameContainer>
        <MainFrame />
        <ExplanationFrame />
      </FrameContainer>
    </>
  );
};

export default Main;
