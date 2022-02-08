import { Button, Grid, Stack, Typography } from "@mui/material";
import BlockOfQuestions from "../components/faq/BlockOfQuestions";
import { LittleQuestion } from '../components/illustrations/illustrations';
export default function Faq() {
  return (
    <Stack sx={{
      backgroundColor: "white",
    }}>
      <br />
      <br />
      <br />
      <br />
      <Grid container className="diocca" justifyContent="space-between" alignItems="center" direction="row" xs={12} sx={{
        maxWidth: "1500px !important",
        margin: "auto",
      }}>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            padding: 6,
          }}
        >
          <center>
            <Typography variant="h2" color="secondary">
              FAQ
            </Typography>
            <br />
            <Typography variant="h6" color="secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <br />
            <Button variant="contained">
              Leggi
            </Button>
          </center>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            padding: 5,
          }}
        >
          <LittleQuestion
            boxProps={{
              width: {xs: "90%", md: "clamp(500px, 100%, 1000px)"},
            }}
          />
        </Grid>
      </Grid>
      <BlockOfQuestions />
    </Stack>
  );
}