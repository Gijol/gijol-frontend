import React from 'react';
import './App.css';
import Main from 'pages/main';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
