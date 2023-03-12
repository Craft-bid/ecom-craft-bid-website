import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { customTheme } from './common/theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={customTheme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
)
