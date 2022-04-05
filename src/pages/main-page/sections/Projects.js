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

export default function Projects() {
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
            <strong>Progetti</strong>
          </Typography>
          <Grid
            container
            direction="column"
            wrap="nowrap"
            gap={2}
            alignItems="center"
            sx={{width: "auto", marginBottom: 16}}
          >
            <MainProjectCard></MainProjectCard>

            <Slider elementsShown={getSliderElements()}>
              <SideProjectCard
                imgSrc="./images/mentorz.png"
                href="https://mentorz.fr/"
                title="Mentorz"
                description="Mentorz è una startup francese che offre  agli influencer gli strumenti di cui hanno bisogno per avere consultazioni 1-1 con i loro follower."
              />
              <SideProjectCard
                imgSrc="./images/yoga.png"
                href="https://www.yogacorfuholidays.com/"
                title="Yoga Holidays"
                description="Yoga holidays è un sito per viaggi a Corfu. I loro pacchetti vacanza danno l'opportunità di ritrovarti sul tappetino da yoga circondato da un paesaggio mozzafiato."
              />
              <SideProjectCard
                imgSrc="./images/kaire.png"
                href="https://kaire-automation.it/"
                title="Kaire automation (sito)"
                description="Kaire automation è una azienda specializzata nella reaizzazione e supervisione di impianti industriali"
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
        gap={1}
      >
        <Typography
          variant="h5"
        >
          <strong>Kaire Automation</strong>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh quam, gravida vel facilisis quis, sollicitudin vel dui. Suspendisse a semper metus.
      </Typography>
      <Divider/>
      <Timeline>
        <TimelineStep Icon={CodeRounded} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh quam, gravida vel facilisis quis, sollicitudin vel dui. Suspendisse a semper metus." stepTitle="step1"/>
        <TimelineStep Icon={CodeRounded} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh quam, gravida vel facilisis quis, sollicitudin vel dui. Suspendisse a semper metus." stepTitle="step2" lastStep/>
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
        borderRadius: 2,
        display: "block",
        height: "100%"
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