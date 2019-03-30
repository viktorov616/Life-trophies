import { createGlobalStyle } from 'styled-components';
import { defaultTheme as theme } from './theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Humanist777';
    src: url('/static/fonts/Humanist777BT-RomanB.otf');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Humanist777';
    src: url('/static/fonts/Humanist777BT-BoldB.otf');
    font-weight: 700;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
    height: 100%;
    min-height: 100%;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Humanist777';
    height: 100%;
    min-height: 100%;
    background: ${theme.background}
  }
  a {
    text-decoration: none;
    color: ${theme.white}
  }
`;

export default GlobalStyle;
