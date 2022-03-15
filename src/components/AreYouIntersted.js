import { Button, Grid, Typography } from "@mui/material";

export default function AreYouInterested() {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap={1}
      sx={{
        marginTop: 6,
      }}
    >
      <Typography>
        Sei interessato?
      </Typography>
      <Button
        variant="contained"
      >
        Contattaci
      </Button>
    </Grid>
  )
}