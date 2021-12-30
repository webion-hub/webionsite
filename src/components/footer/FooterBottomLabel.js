import { Stack, Typography } from "@mui/material";
import theme from "../../Theme";

export default function FooterBottomLabel({children, ...props}){
  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        borderTop: theme.shape.border.main,
        padding: 1
      }}
    >
      <Typography  {...props}>
        {children}
      </Typography>
    </Stack>
  )
}

FooterBottomLabel.defaultProps = {
  color: "secondary",
  align: "center"
}