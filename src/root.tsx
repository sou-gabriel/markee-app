import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global-styles'
import { App } from './app'
import { theme } from 'resources/theme'

import 'normalize.css'

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}
