import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProviderContext } from './context/theme/context'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProviderContext>
    <App />
  </ThemeProviderContext>
)
