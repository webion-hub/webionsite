import { alpha } from "@mui/material";
import colors from "./colors";

const palette = {
  mode: "dark",
  primary: {
    main: colors.primary,
  },
  secondary: {
    main: colors.secondary,
  },
  info: {
    main: colors.tertiary,
  },
  background: {
    default: "#020512",
    dark: "#00051a",
    paper: alpha(colors.primary, 0.1),
  },
}

export default palette