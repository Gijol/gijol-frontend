import { useNavigate } from 'react-router';
import { useEffect } from 'react';

import Header from 'common/header/header';
import MainComponent from './frames/mainPage/mainPageComponent';
import { MainContainer } from './styles';

const Main = function Main(): JSX.Element {
  const navigation = useNavigate();

  useEffect(() => {
    if (window.innerWidth < 600) {
      navigation('mobile');
    }
  }, []);

  return (
    <MainContainer>
      <Header />
      <MainComponent />
    </MainContainer>
  );
};

export default Main;
