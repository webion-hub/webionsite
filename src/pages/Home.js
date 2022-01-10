import { ArrowForwardRounded } from "@mui/icons-material";
import { Stack, Grid, alpha, Typography, Button, Divider, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { CodeThinking } from "../components/illustrations/illustrations";
import MaybeShow from "../components/MaybeShow";
import theme from "../theme/theme";

export default function Home() {
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Stack
      direction="column"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{
          position: "relative",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='600' y1='25' x2='600' y2='777'%3E%3Cstop offset='0' stop-color='%23000F4D'/%3E%3Cstop offset='1' stop-color='%231F4BFF'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='650' y1='25' x2='650' y2='777'%3E%3Cstop offset='0' stop-color='%23001360'/%3E%3Cstop offset='1' stop-color='%231f43ff'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' gradientUnits='userSpaceOnUse' x1='700' y1='25' x2='700' y2='777'%3E%3Cstop offset='0' stop-color='%23001673'/%3E%3Cstop offset='1' stop-color='%231f3bff'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' gradientUnits='userSpaceOnUse' x1='750' y1='25' x2='750' y2='777'%3E%3Cstop offset='0' stop-color='%23001a86'/%3E%3Cstop offset='1' stop-color='%231f33ff'/%3E%3C/linearGradient%3E%3ClinearGradient id='e' gradientUnits='userSpaceOnUse' x1='800' y1='25' x2='800' y2='777'%3E%3Cstop offset='0' stop-color='%23001e99'/%3E%3Cstop offset='1' stop-color='%231f2bff'/%3E%3C/linearGradient%3E%3ClinearGradient id='f' gradientUnits='userSpaceOnUse' x1='850' y1='25' x2='850' y2='777'%3E%3Cstop offset='0' stop-color='%230022ac'/%3E%3Cstop offset='1' stop-color='%231f23ff'/%3E%3C/linearGradient%3E%3ClinearGradient id='g' gradientUnits='userSpaceOnUse' x1='900' y1='25' x2='900' y2='777'%3E%3Cstop offset='0' stop-color='%230025bf'/%3E%3Cstop offset='1' stop-color='%23241fff'/%3E%3C/linearGradient%3E%3ClinearGradient id='h' gradientUnits='userSpaceOnUse' x1='950' y1='25' x2='950' y2='777'%3E%3Cstop offset='0' stop-color='%230029d2'/%3E%3Cstop offset='1' stop-color='%232c1fff'/%3E%3C/linearGradient%3E%3ClinearGradient id='i' gradientUnits='userSpaceOnUse' x1='1000' y1='25' x2='1000' y2='777'%3E%3Cstop offset='0' stop-color='%23002de5'/%3E%3Cstop offset='1' stop-color='%23341fff'/%3E%3C/linearGradient%3E%3ClinearGradient id='j' gradientUnits='userSpaceOnUse' x1='1050' y1='25' x2='1050' y2='777'%3E%3Cstop offset='0' stop-color='%230031f8'/%3E%3Cstop offset='1' stop-color='%233c1fff'/%3E%3C/linearGradient%3E%3ClinearGradient id='k' gradientUnits='userSpaceOnUse' x1='1100' y1='25' x2='1100' y2='777'%3E%3Cstop offset='0' stop-color='%230c3cff'/%3E%3Cstop offset='1' stop-color='%23441fff'/%3E%3C/linearGradient%3E%3ClinearGradient id='l' gradientUnits='userSpaceOnUse' x1='1150' y1='25' x2='1150' y2='777'%3E%3Cstop offset='0' stop-color='%231F4BFF'/%3E%3Cstop offset='1' stop-color='%234C1FFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg %3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' x='100' width='1100' height='800'/%3E%3Crect fill='url(%23c)' x='200' width='1000' height='800'/%3E%3Crect fill='url(%23d)' x='300' width='900' height='800'/%3E%3Crect fill='url(%23e)' x='400' width='800' height='800'/%3E%3Crect fill='url(%23f)' x='500' width='700' height='800'/%3E%3Crect fill='url(%23g)' x='600' width='600' height='800'/%3E%3Crect fill='url(%23h)' x='700' width='500' height='800'/%3E%3Crect fill='url(%23i)' x='800' width='400' height='800'/%3E%3Crect fill='url(%23j)' x='900' width='300' height='800'/%3E%3Crect fill='url(%23k)' x='1000' width='200' height='800'/%3E%3Crect fill='url(%23l)' x='1100' width='100' height='800'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          marginTop: `${-theme.mixins.toolbar.minHeight}px`,
          minHeight: "90vh",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <MaybeShow show={!isMobileView}>
          <Grid
            xs={12}
            md={6}
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
            sx={{
              "& > *": {
                aspectRatio: "1",
                padding: 8,
                borderRadius: "100%",
                maxWidth: 800,
                background: alpha(theme.palette.secondary.dark, 0.05),
                backdropFilter: "blur(30px)",
              },
            }}
          >
            <CodeThinking boxProps={{width: "80%"}}/>
          </Grid>
        </MaybeShow>
        <Grid
          xs={12}
          md={6}
          item
          container
          direction="column"
          justifyContent="center"
          sx={{
            position: "relative",
            paddingInline: {md: 8, xs: 2},
            zIndex: 1,
            "& > *": {
              maxWidth: 600,
            },
            "&::after": {
              content: '""',
              position: "absolute",

              top: "-20%",
              right: 0,

              width: isMobileView ? "120%" : "95%",
              height: "100%",
              borderBottomLeftRadius: "100%",
              background: alpha(theme.palette.secondary.dark, 0.05),
              backdropFilter: "blur(20px)",
              zIndex: -1,
            },
          }}
        >
          <Typography
            variant={isMobileView ? "h2" : "h1"}
            component="h1"
          >
            Titolo webion
          </Typography>
          <Divider sx={{background: theme.palette.secondary.main, width: "100%"}}/>
          <Typography variant="h6" sx={{marginTop: 2}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dignissim neque, vitae elementum orci. Donec molestie non ex vitae ullamcorper.
          </Typography>
          <Box pt={3}>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<ArrowForwardRounded/>}
            >
              Scopri di più
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  )
}