import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import { ThemeContext } from './context/theme/context'
import GlobalStyles from './assets/styles/global'
import Routes from './routes'
import theme from './assets/theme'

import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const { theme: selectedTheme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={selectedTheme === 'light' ? theme.light : theme.dark}>
      <BrowserRouter>
        <Routes />
        <GlobalStyles />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  )
}
