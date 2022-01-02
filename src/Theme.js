import { createTheme } from "@mui/material";
import { alpha } from '@mui/material';

const colors = {
  primary: "#1f4bff",
  secondary: "#D6DEFF",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: "#020612",
      paper: "#020510",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'],
  },
  shape: {
    border: {
      main: `1px solid ${alpha(colors.primary, 0.25)}`,
    },
  },
});

document.body.style.backgroundColor = theme.palette.background.default

export default theme;
