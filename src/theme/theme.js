import { createTheme } from "@mui/material";

import { mixins, palette, shape, typography } from "./theme_impl/index";
import componentsStyles from "./components_styles/componentsStyles";
import { spacing } from "./theme_impl/spacing";

const theme = createTheme({
  palette: palette,
  mixins: mixins,
  typography: typography,
  shape: shape,
  components: componentsStyles,
  spacing: spacing,
});


export const initPageBackground = () => {
  document.body.style.backgroundColor =
    theme.palette.background.default
}

export default theme;
