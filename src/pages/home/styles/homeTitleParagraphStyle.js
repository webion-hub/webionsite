import { alpha } from "@mui/material";
import theme from "../../../theme/theme";

const homeTitleParagraphStyle = (isMobileView) => {
  return {
    position: "relative",
    paddingInline: {md: 8, xs: 2},
    zIndex: 1,
    "& > *": {
      maxWidth: 600,
    },
    "&::after": {
      content: '""',
      position: "absolute",

      top: "-20%",
      right: 0,

      width: isMobileView ? "120%" : "95%",
      height: "100%",
      borderBottomLeftRadius: "100%",
      background: alpha(theme.palette.secondary.dark, 0.05),
      backdropFilter: "blur(20px)",
      zIndex: -1,
    },
  }
}

export default homeTitleParagraphStyle