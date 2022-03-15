import { Stack } from "@mui/material";

export default function Page({children, sx, ...props}) {
  return (
    <Stack
      {...props}
      direction="column"
      sx={{
        ...sx,
        width: "100vw",
        position: "relative",
      }}
    >
      {children}
    </Stack>
  )
}