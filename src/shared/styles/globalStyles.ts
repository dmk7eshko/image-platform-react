import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #fbe9db;
  }

  * {
    box-sizing: inherit;

    input{
        outline: none;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
