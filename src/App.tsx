import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './assets/styles/global'
import theme from './assets/theme'

export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme.dark}>
        <h1> GitHub Explorer </h1>

        <GlobalStyles />
      </ThemeProvider>
    </React.Fragment>
  )
}
