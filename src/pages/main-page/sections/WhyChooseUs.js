import { Grid, Typography, useMediaQuery } from "@mui/material";

import Page from "../../../components/page-components/Page";
import theme from "../../../theme/theme";
import AreYouInterested from "../../../components/buttons/AreYouIntersted";
import { useTranslation } from "react-i18next";
import Line from "../../../components/Line";
import GapUtils from "../../../lib/GapUtils";

export default function WhyChooseUs() {
  const { t } = useTranslation() 
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
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          ...GapUtils.gap(4),
          width: "80vw",
          maxWidth: "900px"
        }}
      >
        <Typography variant="h4" align="center">{t('AIDA-attention')}</Typography>
        <Line></Line>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          sx={{
            "& > *": {
              width: isMd ? "100%" : "40%"
            }
          }}
        >
          <Typography variant="p" align="center">{t('AIDA-interest')}</Typography>
          <Typography variant="p" align="center" sx={{marginTop: isMd ? 4 : 0}}>{t('AIDA-desire')}</Typography>
        </Grid>

      </Grid>
      <AreYouInterested/>
    </Page>
  )
}