import { Grid, Paper, Typography } from "@mui/material";
import theme from "../../../theme/theme";

import AndroidRoundedIcon from '@mui/icons-material/AndroidRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

import Page from "../../../components/page-components/Page";
import PageContent from "../../../components/page-components/PageContent";

export default function OurServices() {
  return (
    <Page
      justifyContent="center"
      alignItems="center"
      gap={4}
      sx={{
        background: theme.palette.background.paper,
        paddingBlock: 6,
      }}
    >
      <Typography
        variant="h3"
        align="center"
      >
        <strong>
          I nostri servizi
        </strong>
      </Typography>
      <PageContent
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          gap={4}
        >
          <CardWithIcon
            title="Applicazioni IOS & Android"
            description="La nostra offerta comprende la creazione di applicazioni per dispositivi mobili con framework multipiattaforma come Flutter"
            Icon={AndroidRoundedIcon}
          />
          <CardWithIcon
            title="IOT per le industrie"
            description="Sviluppo di soluzioni per la raccolta, la manipolazione e il monitoraggio dei dati in tempo reale e storicizzato, utilizzando principalmente C# e Angular."
            Icon={MonitorHeartRoundedIcon}
          />
          <CardWithIcon
            title="Siti & applicazioni Web"
            description="Design e realizzazione di siti web statici e dinamici e creazione di applicazioni web (PWA), con gestione sia del frontend che del backend."
            Icon={LanguageRoundedIcon}
          />
        </Grid>
      </PageContent>
    </Page>
  )
}

function CardWithIcon({Icon, title, description}) {
  return (
    <Paper
      sx={{
        maxWidth: 250,
        width: "100%",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
          background: theme.palette.primary.main,
          borderTopLeftRadius: theme.components.MuiPaper.styleOverrides.rounded.borderRadius,
          borderTopRightRadius: theme.components.MuiPaper.styleOverrides.rounded.borderRadius,
        }}
      >
        <Icon
          sx={{
            marginBlock: 2,
            fontSize: 64,
          }}
        />
      </Grid>
      <Grid
        container
        direction="column"
        gap={1}
        sx={{
          padding: 2,
        }}
      >
        <Typography
          variant="h6"
          align="center"
        >
          <strong>{title}</strong>
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
        >
          {description}
        </Typography>
      </Grid>
    </Paper>
  )
}