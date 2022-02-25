import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { alpha, Grid, Typography } from "@mui/material";
import Card from "../../components/Card";
import Page from "../../components/Page";
import theme from "../../theme/theme";
import TopBorder from './TopBorder';
import { Box } from '@mui/system';
import PageContent from '../../components/PageContent';

export default function Projects() {
  return (
    <Page
      sx={{
        background: theme.palette.background.paper,
        paddingInline: 16,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100vw",
          transform: "translate(0px, -100%)",
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
          <Typography variant="h3" sx={{marginBlock: 4}}>Progetti</Typography>
          <Grid
            container
            direction="row"
            wrap="nowrap"
            gap={2}
            alignItems="center"
            sx={{height: "100%", width: "auto", marginBottom: 16}}
          >
            <MainProjectCard></MainProjectCard>
            <Grid
              container
              direction="column"
              wrap="nowrap"
              gap={2}
              sx={{height: "100%", width: "50%"}}
            >
              <SideProjectCard></SideProjectCard>
              <SideProjectCard></SideProjectCard>
              <SideProjectCard></SideProjectCard>
            </Grid>
          </Grid>
        </Grid>
      </PageContent>

    </Page>
  )
}

function MainProjectCard() {
  return (
    <Card
      title="Progetto"
      sx={{
        height: "100%",
        width: "100%",
        background: alpha(theme.palette.background.default, 0.6),
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

function SideProjectCard() {
  return (
    <Card
      title="Progetto"
      sx={{
        height: "fill-available",
        background: alpha(theme.palette.background.default, 0.6),
      }}
    ></Card>
  )
}