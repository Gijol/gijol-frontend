import React, { useEffect } from 'react';
import './static/fonts/font.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import ReactGA from 'react-ga';

import Main from 'pages/main';
import Qna from 'pages/qna';
import AboutUs from 'pages/aboutus';
import ResultPage from 'pages/result';
import Result from 'utils/api/result';
import MobileMain from 'pages/mobile/mobileMain';

ReactGA.event({
  category: 'User',
  action: 'Create an Account',
});
ReactGA.exception({
  description: 'An error ocurred',
  fatal: true,
});

function App() {
  // const location = useLocation();
  const REENV = process.env.REACT_APP_DEV_GOOGLE_ANALYTICS_TRACKING_ID;
  useEffect(() => {
    ReactGA.initialize(REENV!);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Main />} />
            <Route path="qna" element={<Qna />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="result" element={<ResultPage />} />
            <Route path="mobile" element={<MobileMain />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
