import { Box, Button, Typography } from "@mui/material";
import { BlobAndIllustration } from "../../components/illustrations/illustrations";
import { leftPart, rightPart, container } from "./styles/homeCss";

export default function Home() {
  return (
    <>
      <br /><br /><br />
      <Box sx={container}>
        <Box sx={leftPart}>
          {/* Per ragioni di SEO secondo conviene metterci un h1 per; potrebbe essere troppo grande. nel caso cambiamo dimensione noi ma io lascerei un h1. Dimmi tu*/}
          <Typography
            variant="h1"
            sx={{
              fontSize: {xs: "50px", md: "80px"},
              fontWeight: 400,
              textAlign: "justify",
              color: "#001466", //se i colori vanno bene li mettiamo nel theme. Usando il blu del blob stanno male perciò secondo me è meglio un colore tipo questo
              marginTop: {xs: "100px", lg: 0},
              marginBottom: {xs: "40px", lg: 0},
            }}
          >
            Sviluppiamo applicazioni web
          </Typography>
          <center>
            <Typography
              color="#000C3D"
              variant="h6"
              sx={{
                width: "clamp(250px, 100%, 900px)",
                fontWeight: 400,
                textAlign: "justify",
              }}
            >
              Siamo sviluppatori di applicazioni web e questo è un paragrafo in cui verrà scritto qualcosa di sensato prima o poi. Siamo bravissimi a scrivere codice, ma tipo davvero bravi eh...
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                marginTop: 3,
              }}
            >
              {"Perchè sceglierci?"}
            </Button>
          </center>
        </Box>
        <Box sx={rightPart}>
          <BlobAndIllustration boxProps={{
          }}/>
        </Box>
      </Box>
      {/* Si poi queste ovviamente le togliamo quando mettiamo le altre pagine sotto */}
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}