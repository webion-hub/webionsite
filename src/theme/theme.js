import { createTheme } from "@mui/material";

import mixins from "./mixins";
import palette from "./palette";
import shape from "./shape";
import typography from "./typography";
import componentsStyles from "./components_styles/componentsStyles";

const theme = createTheme({
  palette: palette,
  mixins: mixins,
  typography: typography,
  shape: shape,
  components: componentsStyles,
});

document.body.style.backgroundColor = theme.palette.background.default

export default theme;
