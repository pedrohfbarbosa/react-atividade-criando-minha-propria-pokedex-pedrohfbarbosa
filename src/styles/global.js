import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }
  
  html {
    color-scheme: dark light;
  }
  
  body {
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
  }

  img,
  picture,
  svg,
  video {
    max-width: 100%;
  }

  ul {
    list-style: none;
  }
`;
