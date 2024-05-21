// src/theme.js
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5C1D9E',
    },
    secondary: {
      main: '#333',
    },
  },
  typography: {
    fontFamily: 'Lexend, Arial',
  },
});

export default theme;
