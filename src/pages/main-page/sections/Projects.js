import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ButtonBase, Divider, Grid, IconButton, Paper, Typography, useMediaQuery } from "@mui/material";
import Page from "../../../components/page-components/Page";
import PageContent from '../../../components/page-components/PageContent';
import theme from '../../../theme/theme';
import Slider from '../../../components/Slider';
import { TimelineOppositeContent } from '@mui/lab';
import { CodeRounded } from '@mui/icons-material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import DiscoverOnGitHub from '../../../components/buttons/DiscoverOnGitHub';
import GapUtils from '../../../lib/GapUtils';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation() 
  const isLg = useMediaQuery(theme.breakpoints.down('lg'))
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  const getSliderElements = () => {
    if (isSm) return 1
    if (isLg) return 2
    return 3
  }

  return (
    <Page
      sx={{
        paddingInline: 2,
        position: "relative",
      }}
    >
      <PageContent
        direction="column"
        justifyContent="center"
        wrap="nowrap"
        sx={{height: "100%"}}
      >
        <Grid
          container
          direction="column"
          wrap="nowrap"
          sx={{height: "100%"}}
        >
          <Typography
            variant="h3"
            sx={{marginBlock: 4}}
          >
            <strong>{t('projects-title')}</strong>
          </Typography>
          <Grid
            container
            direction="column"
            wrap="nowrap"
            alignItems="center"
            sx={{
              ...GapUtils.gap(2, 'column'), 
              width: "auto",
              paddingBottom: 16
            }}
          >
            {false && <MainProjectCard></MainProjectCard>}
            <Slider elementsShown={getSliderElements()}>
              <SideProjectCard
                imgSrc="./images/mentorz.webp"
                href="https://mentorz.fr/"
                title={t('project-1-title')}
                description={t('project-1-description')}
              />
              <SideProjectCard
                imgSrc="./images/yoga.webp"
                href="https://www.yogacorfuholidays.com/"
                title={t('project-2-title')}
                description={t('project-2-description')}
              />
              <SideProjectCard
                imgSrc="./images/kaire.webp"
                href="https://kaire-automation.it/"
                title={t('project-3-title')}
                description={t('project-3-description')}
              />
            </Slider>
          </Grid>
        </Grid>
      </PageContent>

      <DiscoverOnGitHub/>

    </Page>
  )
}

function MainProjectCard() {
  const { t } = useTranslation() 
  return (
    <Paper
      sx={{
        height: "100%",
        width: "100%",
        paddingInline: 4,
        paddingBlock: 2,
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        sx={GapUtils.gap(1, "row")}
      >
        <Typography
          variant="h5"
        >
          <strong>{t('case-study-1-title')}</strong>
        </Typography>
        <IconButton
          color="secondary"
          target="_blank"
          href="https://kaire-automation.it/"
        >
          <OpenInNewRoundedIcon/>
        </IconButton>
      </Grid>

      <Typography
        sx={{marginBlock: 1}}
        variant="body2"
        color="textSecondary"
      >
        {t('case-study-1-description')}
      </Typography>
      <Divider/>
      <Timeline>
        <TimelineStep Icon={CodeRounded} description={t('case-study-1-step-1')} stepTitle={t('case-study-1-step-1-title')}/>
        <TimelineStep Icon={CodeRounded} description={t('case-study-1-step-2')} stepTitle={t('case-study-1-step-2-title')}/>
        <TimelineStep Icon={CodeRounded} description={t('case-study-1-step-3')} stepTitle={t('case-study-1-step-3-title')} lastStep/>
      </Timeline>
    </Paper>
  )
}

function TimelineStep({
  lastStep,
  stepTitle,
  description,
  Icon,
}) {
  return (
    <TimelineItem position="right">
      <TimelineOppositeContent
        sx={{flex: 0}}
      />
      <TimelineSeparator>
        <TimelineDot color='primary'>
          <Icon/>
        </TimelineDot>
        {!lastStep && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent sx={{paddingTop: 0, paddingBottom: 4}}>
        <Typography
          variant="h6"
        >
          {stepTitle}
        </Typography>
        <Typography
          variant='body2'
          color="textSecondary"
          sx={{maxWidth: 500}}
        >
          {description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  )
}

function SideProjectCard({title, description, href, imgSrc}) {
  return (
    <ButtonBase
      sx={{
        display: "block",
        height: "100%",
        borderRadius: '24px'
      }}
      href={href}
      target="_blank"
    >
      <Grid
        style={{height: "100%"}}
        component={Paper}
        container
        direction="column"
      >
        <Paper
          sx={{
            width: "100%",
            backgroundImage: `url('${imgSrc}')`,
            backgroundSize: "cover",
            aspectRatio: `${16/9}`,
          }}
        ></Paper>
        <Grid
          container
          direction="column"
          alignItems="center"
          sx={{
            whiteSpace: "normal",
            width: "100%",
            paddingInline: 2,
            paddingTop: 1,
            paddingBottom: 3,
          }}
        >
          <Typography
            variant="subtitle1"
            component="p"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            color="textSecondary"
            align="center"
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  )
}