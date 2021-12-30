import { Stack } from "@mui/material";

export default function StartAppBarSection({children}){
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
    >
      {children}
    </Stack>
  )
}