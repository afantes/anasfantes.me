import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    user-select: none;
    text-align: center;
    text-decoration: none;
  }

  body {
    padding: 0;
    margin: 0;
  }
`;