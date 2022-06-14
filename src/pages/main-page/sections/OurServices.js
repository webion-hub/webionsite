import { alpha, Grid, Paper, Typography } from "@mui/material";
import theme from "../../../theme/theme";

import AndroidRoundedIcon from '@mui/icons-material/AndroidRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

import GapUtils from "../../../lib/GapUtils";

import Page from "../../../components/page-components/Page";
import PageContent from "../../../components/page-components/PageContent";
import { useTranslation } from "react-i18next";

export default function OurServices() {
  const { t } = useTranslation() 

  return (
    <Page
      justifyContent="center"
      alignItems="center"
      sx={{
        ...GapUtils.gap(4, 'both'),
        background: theme.palette.background.paper,
        paddingBlock: 6,
      }}
    >
      <Typography
        variant="h3"
        align="center"
      >
        <strong>
          {t('services-title')}
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
          sx={GapUtils.gap(4, 'both')}
        >
          <CardWithIcon
            title={t('services-service-1-title')}
            description={t('services-service-1-description')}
            Icon={AndroidRoundedIcon}
          />
          <CardWithIcon
            title={t('services-service-2-title')}
            description={t('services-service-2-description')}
            Icon={MonitorHeartRoundedIcon}
          />
          <CardWithIcon
            title={t('services-service-3-title')}
            description={t('services-service-3-description')}
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
        background: alpha(theme.palette.background.default, 0.5)
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
        sx={{
          ...GapUtils.gap(1, 'column'),
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