import { Grid, Typography } from "@mui/material";

export default function Paragraph({title, children}) {
  return (
    <Grid
      container
      direction="column"
      gap={2}
      sx={{
        marginTop: 2,
      }}
    >
      <Typography variant="h4">
        {title}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {children}
      </Typography>
    </Grid>
  )
}