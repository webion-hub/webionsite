import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ButtonCircled from "../../components/buttons/ButtonCircled";
import Page from "../../components/Page";

export default function Home() {
  return (
    <Page
      justifyContent="space-between"
    >

      <Box
        height="33%"
        sx={{
          margin: "0 auto",
        }}
      >
        <Typography variant="h4" component="h1">
          <strong>Webion,</strong>
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

    </Page>
  )
}