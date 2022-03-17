import { Grid, Paper, Typography } from "@mui/material";
import theme from "../../../theme/theme";

import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import WebAssetRoundedIcon from '@mui/icons-material/WebAssetRounded';
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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu lorem at libero commodo ultricies in vel sem."
            Icon={PhoneIphoneRoundedIcon}
          />
          <CardWithIcon
            title="Applicazioni Web"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu lorem at libero commodo ultricies in vel sem."
            Icon={ComputerRoundedIcon}
          />
          <CardWithIcon
            title="Siti Web"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu lorem at libero commodo ultricies in vel sem."
            Icon={WebAssetRoundedIcon}
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