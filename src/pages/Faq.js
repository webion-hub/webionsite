import { Button, Grid, Typography } from "@mui/material";
import BlockOfQuestions from "../components/faq/BlockOfQuestions";
import { LittleQuestion } from '../components/illustrations/illustrations';
export default function Faq() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <Grid container justifyContent="space-between" alignItems="center" direction="row" xs={12}>
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
            svgProps={{
              height: "300px",
              width: "10%",
            }}
          />
        </Grid>
      </Grid>
      <BlockOfQuestions />
    </>
  );
}