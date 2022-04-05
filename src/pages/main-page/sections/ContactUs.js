import { alpha, Grid, Typography, useMediaQuery } from "@mui/material";
import BinaryBackground from "../../../components/backgrounds/BinaryBackground";
import Page from "../../../components/page-components/Page";
import PageContent from "../../../components/page-components/PageContent";
import theme from "../../../theme/theme";
import RotatingDashedCirlce from "../../../components/svgs/RotatingDashedCirlce";
import RotatingCirleGroup from "../../../components/svgs/RotatingCirlceGroup";
import ContactUsCard from "../../../components/contact-components/ContactUsCard";

export default function ContactUs() {
  const isMd = useMediaQuery(theme.breakpoints.down('md'), {noSsr: true})

  return (
    <Page
      justifyContent="center"
      sx={{
        overflow: "hidden",
      }}
    >
      <PageContent
        container
        direction="row"
        justifyContent="center"
        sx={{
          marginBlock: 8,
        }}
      >
        <Grid
          item
          container
          direction="row"
          justifyContent={{md: "flex-end", xs: "center"}}
          sx={{marginInline: {md: 'auto', xs: 2}}}
          md={9}
          sm={12}
        >
          <Typography
            variant={isMd ? "h3" : "h2"}
            align="center"
            sx={{
              transform: {xs: 'none', sm: 'rotate(180deg)'},
              writingMode: {xs: 'none', sm: 'tb-rl'},
              textOrientation: {xs: 'none', sm: 'mixed'},
            }}
          >
            Contattaci
          </Typography>
          <ContactUsCard/>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent={{md: "flex-start", xs: "center"}}
          md={3}
          sm={12}
          sx={{
            position: "relative",
            height: {xs: 200, md: "auto"},
            overflow: "hidden",
          }}
        >
          <BinaryBackground
            elements={isMd ? [1, 1, 2, 3, 2, 2, 1] : [6, 4, 3, 1, 1]}
            position={isMd ? "top" : "right"}
            height={isMd ? 60 : 160}
            sx={{
              position: "absolute",
              height: "100%",
              zIndex: -1,
            }}
          />
        </Grid>
      </PageContent>
      <RotatingCirleGroup bottom={0} left={0} transform="translate(-50%, 50%)">
        <RotatingDashedCirlce
          animationDuration="120s"
          size={800}
          strokeWidth={16}
          strokeColor={alpha(theme.palette.primary.main, 0.05)}
          strokeDasharray="200 80"
        />
        <RotatingDashedCirlce
          animationDuration="180s"
          size={500}
          strokeWidth={8}
          strokeColor={alpha(theme.palette.primary.main, 0.15)}
          strokeDasharray="200 80"
        />
      </RotatingCirleGroup>
    </Page>
  )
}