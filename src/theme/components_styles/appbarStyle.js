import { alpha } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { palette, shape } from "../theme_impl/index";

const appBarStyle = {
  styleOverrides: {
    root: {
      zIndex: zIndex.drawer + 1,
      backdropFilter: "blur(20px)",
      background: alpha(palette.primary.main, 0.03),
      borderBottom: shape.border.main,
    },
  },
}



export default appBarStyle