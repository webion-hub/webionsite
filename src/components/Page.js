import { Stack } from "@mui/material";

export default function Page({children, sx, ...props}) {
  return (
    <Stack
      {...props}
      direction="column"
      sx={{
        ...sx,
        height: "100vh",
        maxHeight: 900,
      }}
    >
      {children}
    </Stack>
  )
}