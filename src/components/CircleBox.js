import { alpha } from "@mui/material";
import theme from "../theme/theme";

export default function CircleBox({children, Component, ...props}) {
  const {
    maxWidth,
    background,
    backdropFilter,
    padding,
    sx,
    ...componentProps
  } = props

  return (
    <Component
      {...componentProps}
      sx={{
        ...sx,
        "& > *": {
          aspectRatio: "1",
          borderRadius: "100%",
          maxWidth,
          background,
          backdropFilter,
          padding,
        },
      }}
    >
      {children}
    </Component>
  )
}

CircleBox.defaultProps = {
  maxWidth: 800,
  background: alpha(theme.palette.secondary.dark, 0.05),
  backdropFilter: "blur(30px)",
  padding: 8,
}
