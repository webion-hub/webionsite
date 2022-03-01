import { Stack } from "@mui/material";

export default function Page({children, ...props}) {
  return (
    <Stack
      {...props}
      direction="column"
    >
      {children}
    </Stack>
  )
}