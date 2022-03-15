import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function AreYouInterested() {
  const navigate = useNavigate()

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
        href="/#contattaci"
        onClick={_ => navigate("/#contattaci")}
      >
        Contattaci
      </Button>
    </Grid>
  )
}