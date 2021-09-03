import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  lightMode: {
    colors: {
      primary: {
        light: '#FDFE14',
        normal: '#CCCD01',
        dark: '#898901',
        background: '#898901',
      },
      secondary: {
        light: '#09C407',
        normal: '#068305',
        dark: '#034203',
        background: '#034203',
      },
      tertiary: {
        light: '#0301DF',
        normal: '#02019C',
        dark: '#010159',
        background: '#010159',
      },
      black: 'black',
      white: 'white',
    },
  },
  typography: {
    primary: 'Roboto',
    secondary: 'Montserrat',
  },
  breakpoints: {
    mobile: '450px',
    tablet: '650px',
    desktop: '1200px',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 16px;
    font-family: ${theme.typography.primary};
    color: ${theme.lightMode.colors.white};
  }
`;

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
