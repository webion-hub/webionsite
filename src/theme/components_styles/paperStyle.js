import { alpha } from "@mui/material";
import { palette, shape } from "../theme_impl";

const paperStyle = {
  styleOverrides: {
    root: {
      background: alpha(palette.primary.main, 0.1),
      border: shape.border.main,
      borderRadius: 20,
      padding: 2,
    },
  },
}



export default paperStyle