import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { customTheme } from './common/theme';
import './index.scss';
import { ThemeProvider } from '@mui/material';
import { AuthenticationContextProvider } from './components/AuthenticationContext/AuthenticationContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={customTheme}>
    <AuthenticationContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </AuthenticationContextProvider>
  </ThemeProvider>
);
