import { alpha } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

import mixins from "../mixins";
import palette from "../palette";
import shape from "../shape";

const appBarStyle = {
  styleOverrides: {
    root: {
      zIndex: zIndex.drawer + 1,
      backdropFilter: "blur(20px)",
      background: alpha(palette.primary.main, 0.03),
      borderBottom: shape.border.main,
      "& + *": {
        marginTop: mixins.toolbar.minHeight + "px",
      },
    },
  },
}



export default appBarStyle