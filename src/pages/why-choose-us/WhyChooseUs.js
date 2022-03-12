import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import StyleRoundedIcon from '@mui/icons-material/StyleRounded';
import Page from "../../components/Page";
import theme from "../../theme/theme";
import Line from "../../components/Line";
import Paragraph from "../../components/Paragraph";

export default function WhyChooseUs() {
  const isLg = useMediaQuery(theme.breakpoints.down('lg'))
  const isMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Page
      justifyContent="center"
      alignItems="center"
      sx={{
        background: theme.palette.background.paper,
        paddingBlock: 12,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
      >
        <Grid
          item
          container
          justifyContent={isMd ? "center" : "flex-end"}
          alignItems="center"
          md={6}
          xs={12}
        >
          <Typography
            variant={isLg ? "h2" : "h1"}
            align={isMd ? "center" : "right"}
          >
            <strong>
              Perchè <br/>
              sceglierci?
            </strong>
          </Typography>
          <Line
            orientation={isMd ? "vertical" : "horizontal"}
            sx={{
              maxWidth: isMd ? "80% !important" : "100% !important",
              marginLeft: isMd ? 0 : 4,
              marginTop: isMd ? 2 : 0,
            }}
          />
        </Grid>

        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems={{sm: "center", md: "flex-start"}}
          md={6}
          xs={12}
          gap={6}
          sx={{
            paddingBlock: isMd ? 4 : 8,
            paddingInline: 4,
          }}
        >
          <Paragraph
            Icon={StyleRoundedIcon}
            title="Versatilità"
            description="La nostra offerta comprende siti e applicazioni web, IOT per l'automazione mediante il web e software multipiattaforma."
          ></Paragraph>
          <Paragraph
            Icon={StyleRoundedIcon}
            title="Personalizzazione"
            description="Offriamo una completa personalizzazione dell'interfaccia grafica e facciamo tutto su misura del cliente."
          ></Paragraph>
          <Paragraph
            Icon={StyleRoundedIcon}
            title="Ottimizzazione"
            description="Crediamo sia fondamentale consegnare risultati di alta qualità. Per questo motivo ci concentriamo su una totale ottimizzazione ed un perfezionamento del prodotto finale."
          ></Paragraph>
        </Grid>
      </Grid>
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
    </Page>
  )
}