import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ButtonBase, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import Card from "../../components/Card";
import Page from "../../components/Page";
import TopBorder from './TopBorder';
import { Box, alpha } from '@mui/system';
import PageContent from '../../components/PageContent';
import theme from '../../theme/theme';
import Slider from '../../components/slider/Slider';

export default function Projects() {
  const isLg = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Page
      sx={{
        paddingInline: 2,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100vw",
          transform: "translate(0px, -99%)",
        }}
      >
        <TopBorder height="125px"></TopBorder>
      </Box>
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
            Progetti
          </Typography>
          <Grid
            container
            direction={isLg ? "column" : "row"}
            wrap="nowrap"
            gap={2}
            alignItems="center"
            sx={{width: "auto", marginBottom: 16}}
          >
            <MainProjectCard></MainProjectCard>

            <Slider width={300}>
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
                description="Yoga holidays è un sito per viaggi a Corfu. I loro pacchetti vacanza danno l'opportunità di ritrovarti sul tappetino da yoga circondato da un paesaggio mozzafiato insieme a divertenti attività all'aperto e avventure intorno all'isola incluse nel pacchetto."
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

    </Page>
  )
}

function MainProjectCard() {
  return (
    <Card
      title="Kaire Automation"
      titleVariant="h5"
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Card>
  )
}

function SideProjectCard({title, description, href, imgSrc, ...props}) {
  return (
    <ButtonBase
      sx={{
        borderRadius: 2,
        width: props.width,
        height: props.height,
        display: "block",
      }}
      href={href}
      target="_blank"
    >
      <Paper
        sx={{
          borderRadius: 2,
          backgroundImage: `url('${imgSrc}')`,
          backgroundSize: "cover",
          aspectRatio: `${16/9}`,
          "&:hover > .card-overlay": {
            opacity: 1,
          },
        }}
      >
        <Grid
          className="card-overlay"
          container
          direction="column"
          alignItems="center"
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 2,
            backdropFilter: "blur(8px)",
            background: alpha(theme.palette.primary.dark, 0.5),
            opacity: 0,
            transition: "0.25s all",
            padding: 2,
          }}
        >
          <Typography
            variant="h6"
            component="p"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            align="center"
          >
            {description}
          </Typography>
        </Grid>
      </Paper>
    </ButtonBase>
  )
}