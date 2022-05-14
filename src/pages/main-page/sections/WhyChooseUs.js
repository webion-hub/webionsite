import { Grid, Typography, useMediaQuery } from "@mui/material";

import BrushRoundedIcon from '@mui/icons-material/BrushRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';

import Page from "../../../components/page-components/Page";
import theme from "../../../theme/theme";
import Line from "../../../components/Line";
import SmallParagraph from "../../../components/text-boxes/SmallParagraph";
import AreYouInterested from "../../../components/buttons/AreYouIntersted";
import GapUtils from "../../../lib/GapUtils";

export default function WhyChooseUs() {
  const isLg = useMediaQuery(theme.breakpoints.down('lg'))
  const isMd = useMediaQuery(theme.breakpoints.down('md'))

  const getTitleVariant = () => {
    if (isMd)
      return "h3"

    if (isLg)
      return "h2"

    return "h1"
  }

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
            component="h2"
            variant={getTitleVariant()}
            align={isMd ? "center" : "right"}
          >
            <strong>
              Perché <br/>
              sceglierci?
            </strong>
          </Typography>
          <Line
            orientation={isMd ? "horizontal" : "vertical"}
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
          sx={{
            ...GapUtils.gap(6, "column"),
            paddingBlock: isMd ? 4 : 8,
            paddingInline: 4,
          }}
        >
          <SmallParagraph
            Icon={RouteRoundedIcon}
            title="Percorso"
            description="La nostra offerta comprende siti e applicazioni web, IOT per l'automazione mediante il web e software multipiattaforma."
          />
          <SmallParagraph
            Icon={BrushRoundedIcon}
            title="Personalizzazione"
            description="Offriamo una completa personalizzazione dell'interfaccia grafica e facciamo tutto su misura del cliente."
          />
          <SmallParagraph
            Icon={BoltRoundedIcon}
            title="Ottimizzazione"
            description="Crediamo sia fondamentale consegnare risultati di alta qualità. Per questo motivo ci concentriamo su una totale ottimizzazione ed un perfezionamento del prodotto finale."
          />
        </Grid>
      </Grid>
      <AreYouInterested/>
    </Page>
  )
}