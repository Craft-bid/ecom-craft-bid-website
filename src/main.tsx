import './i18n/i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { customTheme } from './common/theme';
import './index.scss';
import { ThemeProvider } from '@mui/material';
import { AuthenticationContextProvider } from './components/AuthenticationContext/AuthenticationContext';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={customTheme}>
    <AuthenticationContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <App />
          </LocalizationProvider>
        </BrowserRouter>
      </React.StrictMode>
    </AuthenticationContextProvider>
  </ThemeProvider>
);
