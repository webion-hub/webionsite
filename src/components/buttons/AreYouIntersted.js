import { Button, Grid, Typography } from "@mui/material";
import GapUtils from "../../lib/GapUtils";

export default function AreYouInterested() {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        ...GapUtils.gap(1, 'row'),
        marginTop: 6,
      }}
    >
      <Typography>
        Sei interessato?
      </Typography>
      <Button
        variant="contained"
        href="/#contattaci"
        onClick={_ => window.location = "/#contattaci"}
      >
        Contattaci
      </Button>
    </Grid>
  )
}