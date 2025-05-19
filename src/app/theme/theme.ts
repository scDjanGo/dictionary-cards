import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    background: { default: '#f5f5f5' },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: 'clamp(1rem, 1vw, 2.5rem)',
      fontWeight: 700,
    },
    h5: {
      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;