import Header from 'common/header/header';
import MainComponent from './frames/mainPage/mainPageComponent';
import { MainContainer } from './styles';

const Main = function Main(): JSX.Element {
  return (
    <MainContainer>
      <Header />
      <MainComponent />
    </MainContainer>
  );
};

export default Main;
