import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  input, textarea {
    border: none;
    outline: none;
    background-color: transparent;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  body {
    font-family: 'DM Sans', sans-serif
  }
`
