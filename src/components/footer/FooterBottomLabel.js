import { Stack, Typography } from "@mui/material";
import theme from "../../theme/theme";

export default function FooterBottomLabel({children, ...props}) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        borderTop: theme.shape.border.main,
        padding: 1,
      }}
    >
      <Typography  {...props}>
        {children}
      </Typography>
    </Stack>
  )
}

FooterBottomLabel.defaultProps = {
  color: theme.palette.info.main,
  align: "center",
}