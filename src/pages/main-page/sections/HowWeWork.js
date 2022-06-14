import { ArrowDownwardRounded, ArrowForwardRounded, CodeRounded, EditRounded, FlagRounded, CheckCircleRounded } from "@mui/icons-material";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import IconWithDescription from "../../../components/text-boxes/IconWithDescription";
import Page from "../../../components/page-components/Page";
import PageContent from "../../../components/page-components/PageContent";
import theme from "../../../theme/theme";
import EmptyComponent from "../../../components/utils/EmptyComponent";
import GapUtils from "../../../lib/GapUtils";
import { useTranslation } from "react-i18next";

export default function HowWeWork() {
  const { t } = useTranslation() 
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
        sx={GapUtils.gap(10, 'column')}
      >
        <Typography
          variant={isMd ? "h3" : "h2"}
          align="center"
        >
          <strong>{t('how-we-work')}</strong>
        </Typography>
        <Grid
          container
          direction={isSm ? "column" : "row"}
          alignItems={isSm ? "center" : ""}
          justifyContent="center"
          sx={GapUtils.gap(2, "both")}
        >
          <IconWithDescription
            Icon={FlagRounded}
            title={t('step-1-title')}
            description={t('step-1-description')}
          />
          <DynamicArrow/>
          <IconWithDescription
            Icon={EditRounded}
            title={t('step-2-title')}
            description={t('step-2-description')}
          />
          <DynamicArrow/>
          <IconWithDescription
            Icon={CodeRounded}
            title={t('step-3-title')}
            description={t('step-3-description')}
          />
          <DynamicArrow/>
          <IconWithDescription
            Icon={CheckCircleRounded}
            title={t('step-4-title')}
            description={t('step-4-description')}
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