import { Box } from "@mui/system";
import theme from '../../theme/theme';

export default function Footer({children}) {
  return (
    <Box
      sx={{
        width: "100vw",
        background: theme.palette.background.dark,
      }}
    >
      {children}
    </Box>
  )
}