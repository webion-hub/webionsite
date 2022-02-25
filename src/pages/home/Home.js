import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ButtonCircled from "../../components/buttons/ButtonCircled";
import { Worker } from "../../components/illustrations/illustrations";
import Page from "../../components/Page";
import SquareSvg from "./Square";

export default function Home() {
  return (
    <Page
      justifyContent="space-between"
    >
      <Box height="33%">
        <SquareSvg/>
      </Box>
      <Box
        height="33%"
        sx={{
          margin: "0 auto",
        }}
      >
        <Typography variant="h4" component="h1">
          Webion,
        </Typography>
        <Typography variant="h2" component="h1">
          gli artigiani del software
        </Typography>
        <ButtonCircled
          variant="contained"
          sx={{
            marginTop: 4,
          }}
        >
         Scopri perchè
        </ButtonCircled>
      </Box>
      <Box height="33%">
        <Grid
          sx={{height: "100%"}}
          container
          direction="row"
          justifyContent="space-between"
        >
          <Worker boxProps={{
            width: "auto",
            sx: {
              transform: "scale(1.5)",
              marginLeft: 8,
            },
          }}
          ></Worker>
          <SquareSvg flip/>
        </Grid>
      </Box>
    </Page>
  )
}