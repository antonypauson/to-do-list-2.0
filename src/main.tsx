import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App'
import {ThemeProvider, createTheme} from '@mui/material/styles'; 
import CssBaseline  from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', 
  }, 
  typography: {
    fontFamily: 'Inter, sans-serif', 
  }, 
}); 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
