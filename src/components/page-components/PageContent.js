import { Grid } from "@mui/material";

export default function PageContent({children, sx, ...props}) {
  return (
    <Grid
      {...props}
      container
      sx={{
        ...sx,
        maxWidth: 1200,
        marginInline: "auto",
      }}
    >
      {children}
    </Grid>
  )
}