import { Stack } from "@mui/material";

export default function FooterColumn({children, width, ...props}) {
  return (
    <Stack
      {...props}
      sx={{
        maxWidth: width,
        width: "100%",
        "& > button": {
          justifyContent: props.alignItems,
        },
        "& > a": {
          justifyContent: props.alignItems,
        },
      }}
    >
      {children}
    </Stack>
  )
}

FooterColumn.defaultProps = {
  width: 300,
  direction: "column",
  alignItems: "center",
  justifyContent: "center",
  spacing: 1,
}