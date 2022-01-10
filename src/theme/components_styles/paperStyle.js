import { alpha } from "@mui/material";
import { palette, shape } from "../theme_impl";

const paperStyle = {
  styleOverrides: {
    root: {
      background: alpha(palette.primary.main, 0.1),
      padding: 2,
    },
    rounded: {
      border: shape.border.main,
      borderRadius: 20,
    },
  },
}



export default paperStyle