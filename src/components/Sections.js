import { Box } from "@mui/system";
import theme from "../theme/theme";

export default function Sections({children, sx}) {
  return (
    <Box
      sx={{
        ...sx,
        width: "100%",
        "& > section::before": {
          display: 'block',
          content: "''",
          marginTop: -theme.mixins.toolbar.minHeight + "px",
          height: theme.mixins.toolbar.minHeight + "px",
          visibility: 'hidden',
        },
      }}
    >
      {children}
    </Box>
  )
}