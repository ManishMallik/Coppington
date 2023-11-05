import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Listing from './components/Listing';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"],
  },
  palette: {
    primary: {
      light: '#cbb682',
      main: '#cbb682',
      dark: '#cbb682',
      contrastText: '#cbb682',
    },
    secondary: {
      light: '#cbb682',
      main: '#cbb682',
      dark: '#cbb682',
      contrastText: '#cbb682',
    },
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography component="div">
      <Navbar />
      <Listing />
      </Typography>
    </ThemeProvider>
  );
};

export default App;