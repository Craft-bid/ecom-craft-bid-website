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
      light: '#EEF9EB',
      dark: '#17252A',
    },
    secondary: {
      main: '#2196F3',
    },
  },
  breakpoints: {
    values: {
      desktop: 1024,
      mobile: 0,
      tablet: 768,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Lato',
    },
    h2: {
      fontFamily: 'Lato',
    },
    h3: {
      fontFamily: 'Lato',
    },
    h4: {
      fontFamily: 'Lato',
    },
    h5: {
      fontFamily: 'Lato',
    },
    h6: {
      fontFamily: 'Lato',
    },
    subtitle1: {
      fontFamily: 'Montserrat',
    },
    subtitle2: {
      fontFamily: 'Montserrat',
    },
    body1: {
      fontFamily: 'Montserrat',
    },
    body2: {
      fontFamily: 'Montserrat',
    },
  },
});
