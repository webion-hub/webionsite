import { createTheme } from "@mui/material";

const theme = createTheme({
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

document.body.style.backgroundColor = theme.palette.background.default

export default theme;
