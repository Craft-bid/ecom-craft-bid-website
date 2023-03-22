import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#2B7A78',
      contrastText: '#fff',
    },
    secondary: {
      main: '#17252A',
    },
  },
  breakpoints: {
    values: {
      desktop: 1024,
      mobile: 0,
      tablet: 768,
    },
  },
});
