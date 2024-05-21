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
  body: {
    backgroundColor: '#f0f0f0',
  },
});

export default theme;
