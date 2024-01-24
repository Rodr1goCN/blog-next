import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
         outline: none;
         margin: 0;
         padding: 0;
         box-sizing: border-box;
       }

   body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }

  html {
    font-size: 62.5%; /* Para poder usar o REM, então 1.5rem é igual 15px (15pixels)*/
  }
`;
