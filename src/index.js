import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 16px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
