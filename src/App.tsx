import React, { useContext } from 'react'
import { Checkbox } from 'semantic-ui-react'
import { ThemeProvider } from 'styled-components'

import { ThemeContext } from './context/theme/context'
import GlobalStyles from './assets/styles/global'
import theme from './assets/theme'

export default function App() {
  const { theme: selectedTheme, onChangeTheme } = useContext(ThemeContext)

  return (
    <React.Fragment>
      <ThemeProvider
        theme={selectedTheme === 'light' ? theme.light : theme.dark}
      >
        <h1> GitHub Explorer </h1>
        <Checkbox toggle onChange={onChangeTheme} />
        <GlobalStyles />
      </ThemeProvider>
    </React.Fragment>
  )
}
