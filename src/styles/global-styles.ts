import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  body {
    font-family: 'DM Sans', sans-serif
  }
`
