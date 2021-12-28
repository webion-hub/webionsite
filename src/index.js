import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const outerTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1f4bff",
    },
    secondary: {
      main: "#D6DEFF",
    },
    background: {
      default: "#020612",
      paper: "#020510"
    }
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'],
  }
});

export default outerTheme;
document.body.style.backgroundColor = outerTheme.palette.background.default

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={outerTheme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
