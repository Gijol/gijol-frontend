import Header from 'common/header/header';
import MainFrame from './frames/frame1/frame1';
import ExplanationFrame from './frames/frameExplain/explanation';
import FrameContainer from './styles';
import FileAddFrame from './frames/frameFileAdd/fildAdd';

const Main = function Main(): JSX.Element {
  return (
    <>
      <Header />
      <FrameContainer>
        <MainFrame />
        <ExplanationFrame />
        <FileAddFrame />
      </FrameContainer>
    </>
  );
};

export default Main;
