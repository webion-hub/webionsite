import { createTheme } from "@mui/material";

import mixins from "./theme_impl/mixins";
import palette from "./theme_impl/palette";
import shape from "./theme_impl/shape";
import typography from "./theme_impl/typography";
import componentsStyles from "./components_styles/componentsStyles";

const theme = createTheme({
  palette: palette,
  mixins: mixins,
  typography: typography,
  shape: shape,
  components: componentsStyles,
});


export const initPageBackground = () => {
  document.body.style.backgroundColor =
    theme.palette.background.default
}

export default theme;
