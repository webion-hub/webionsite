import { alpha } from "@mui/material";
import mixins from "../mixins";
import palette from "../palette";
import shape from "../shape";

const drawerStyle = {
  styleOverrides: {
    paper: {
      marginTop: mixins.toolbar.minHeight,
      width: "75%",
      maxWidth: 300,
      background: alpha(palette.primary.main, 0.3),
      backdropFilter: "blur(20px)",
      borderLeft: shape.border.dark,
    },
  },
}



export default drawerStyle