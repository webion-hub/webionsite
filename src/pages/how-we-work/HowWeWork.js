import { ArrowDownwardRounded, ArrowForwardRounded, CodeRounded, DesignServicesRounded, EditRounded, FlagRounded } from "@mui/icons-material";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import IconWithDescription from "../../components/IconWithDescription";
import Page from "../../components/Page";
import PageContent from "../../components/PageContent";
import theme from "../../theme/theme";

export default function HowWeWork() {
  const isMd = useMediaQuery(theme.breakpoints.down('md'))
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Page
      justifyContent="center"
      alignItems="center"
      sx={{
        background: theme.palette.background.paper,
        paddingBlock: 6,
      }}
    >
      <PageContent
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={10}
      >
        <Typography
          variant={isMd ? "h3" : "h2"}
          align="center"
        >
          <strong>Come lavoriamo?</strong>
        </Typography>
        <Grid
          container
          direction={isSm ? "column" : "row"}
          alignItems={isSm ? "center" : ""}
          justifyContent="center"
          gap={2}
        >
          <IconWithDescription
            Icon={FlagRounded}
            title="Obiettivi"
            description="Ti facciamo domande per conoscere la tua attività e il tuo marchio. Definiamo chiaramente quali sono i tuoi obiettivi e perchè."
          />
          <DynamicArrow/>
          <IconWithDescription
            Icon={EditRounded}
            title="Bozza"
            description="Dopo una analisi approfondita dei compepitor e dell'utente finale, facciamo una bozza del sito insieme."
          />
          <DynamicArrow/>
          <IconWithDescription
            Icon={DesignServicesRounded}
            title="Design"
            description="Progettiamo la grafica del sito web, in una versione intermedia, così puoi dirci se siamo sulla strada giusta."
          />
          <DynamicArrow/>
          <IconWithDescription
            Icon={CodeRounded}
            title="Sviluppo"
            description="Sviluppiamo il sito web e utilizziamo tecniche SEO per portare la tua azienda a più clienti possibile."
          />
        </Grid>
      </PageContent>
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

function DynamicArrow() {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  const getIcon = () => {
    return isSm
      ? <ArrowDownwardRounded/>
      : <ArrowForwardRounded/>
  }

  return (
    <Grid
      container
      alignItems="center"
      sx={{width: "auto"}}
    >
      {getIcon()}
    </Grid>
  )
}