import { ArrowDownwardRounded, ArrowForwardRounded, CodeRounded, EditRounded, FlagRounded, CheckCircleRounded } from "@mui/icons-material";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import IconWithDescription from "../../../components/text-boxes/IconWithDescription";
import Page from "../../../components/page-components/Page";
import PageContent from "../../../components/page-components/PageContent";
import theme from "../../../theme/theme";
import EmptyComponent from "../../../components/utils/EmptyComponent";

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
            description="Individuiamo il tuo problema e definiamo chiaramente quali sono i tuoi obiettivi."
          />
          <DynamicArrow/>
          <IconWithDescription
            Icon={EditRounded}
            title="Bozza"
            description="Realizziamo prima una bozza low-fidelity continuando a refinirlo fino ad arrivare alla tua UI ideale."
          />
          <DynamicArrow/>
          <IconWithDescription
            Icon={CodeRounded}
            title="Sviluppo"
            description="Iniziamo lo sviluppo step-by-step, continuando a rimanere in contatto per non uscire dalle linee guida."
          />
          <DynamicArrow/>
          <IconWithDescription
            Icon={CheckCircleRounded}
            title="Consegna"
            description="Dopo un riscontro finale ti consegnamo il prodotto finito, rimanendo disponibili per un'assistenza post-vendita. "
          />
        </Grid>
      </PageContent>
    </Page>
  )
}

function DynamicArrow() {
  const isMd = useMediaQuery(theme.breakpoints.down('md'))
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  const getIcon = () => {
    return isSm
      ? <ArrowDownwardRounded/>
      : <ArrowForwardRounded/>
  }

  const isBetweenMdAndSm = () => {
    return isMd && !isSm
  }

  if (isBetweenMdAndSm())
    return <EmptyComponent/>

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