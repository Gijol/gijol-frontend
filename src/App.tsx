import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

import Main from 'pages/main';
import Qna from 'pages/qna';
import AboutUs from 'pages/aboutus';
import ResultPage from 'pages/result';
import Result from 'utils/api/result';
import MobileMain from 'pages/mobile/mobileMain';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="gijol-frontend/">
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
