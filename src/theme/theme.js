import { createTheme } from "@mui/material";

import mixins from "./mixins";
import palette from "./palette";
import scrollbar from "./scrollbar";
import shape from "./shape";
import typography from "./typography";

const theme = createTheme({
  palette: palette,
  mixins: mixins,
  typography: typography,
  shape: shape,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...scrollbar,
        },
      },
    },
  },
});

document.body.style.backgroundColor = theme.palette.background.default

export default theme;
