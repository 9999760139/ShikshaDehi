import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {createMuiTheme,ThemeProvider} from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    // mode: "light",
    primary: {
      main: "#B9E4C9",
      light: green[500],
      dark: "#999999",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#442C2E",
      light: green[500],
      // dark: red[500],
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    // fontFamily:" "Roboto","Helvetica" "Arial",sans-serif ",
    // h3:20,
  },
});

ReactDOM.render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
