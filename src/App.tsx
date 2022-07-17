import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { ThemeContext } from './context/theme/context'
import GlobalStyles from './assets/styles/global'
import theme from './assets/theme'
import SignIn from './pages/SignIn/index'

import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const { theme: selectedTheme } = useContext(ThemeContext)

  return (
    <React.Fragment>
      <ThemeProvider
        theme={selectedTheme === 'light' ? theme.light : theme.dark}
      >
        <SignIn />
        <GlobalStyles />
        <ToastContainer />
      </ThemeProvider>
    </React.Fragment>
  )
}
