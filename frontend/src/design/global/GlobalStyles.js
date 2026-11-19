import { createGlobalStyle } from "styled-components";
import { COLORS } from "../tokens/Colors";


const GlobalStyles = createGlobalStyle`

  /* =========================
     Basic reset
  ========================= */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    min-height: 100%;
  }

  body {
    margin: 0;

    /* Global font for the application */
    font-family: 'Inter', Arial, Helvetica, sans-serif;

    /* Default page colours */
    background-color: ${COLORS.bg};
    color: ${COLORS.textPrimary};
  }


  /* =========================
     Common elements
  ========================= */

  /* Remove default browser margins */
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  /* Links inherit their colour unless
     a component gives them another colour */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Buttons and inputs should use the
   same font as the rest of the application */
  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  /* Images shouldn't overflow their container */
  img {
    display: block;
    max-width: 100%;
  }

`;


export default GlobalStyles;