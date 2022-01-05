import { alpha } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { mixins, palette, shape } from "../theme_impl/index";

const appBarStyle = {
  styleOverrides: {
    root: {
      zIndex: zIndex.drawer + 1,
      backdropFilter: "blur(20px)",
      background: alpha(palette.primary.main, 0.03),
      borderRadius: 0,
      borderRight: "none",
      borderLeft: "none",
      borderTop: "none",
      borderBottom: shape.border.main,
      "& + *": {
        marginTop: mixins.toolbar.minHeight + "px",
      },
    },
  },
}



export default appBarStyle