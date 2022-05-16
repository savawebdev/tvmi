import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --clr-black: #2E282A;
    --clr-blue: #084887;
    --clr-lightgreen: #17BEBB;
    --clr-red: #EF3E36;
    --clr-white: #F7F5FB;

    --transition-primary: all 0.4s ease;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
  }
`;

export default GlobalStyle;
