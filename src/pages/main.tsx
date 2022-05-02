import Header from 'common/header/header';
import MainComponent from './frames/mainPage/mainPageComponent';

const Main = function Main(): JSX.Element {
  const viewHeigth = window.innerHeight;
  return (
    <>
      <Header />
      <MainComponent />
    </>
  );
};

export default Main;
