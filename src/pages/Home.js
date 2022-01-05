import { ArrowForwardRounded } from "@mui/icons-material";
import { Stack, Grid, alpha, Typography, Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { Website } from "../components/illustrations/illustrations";
import theme from "../theme/theme";

export default function Home() {
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
          marginTop: `${-theme.mixins.toolbar.minHeight}px`,
          minHeight: "90vh",
          height: "100%",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            width: "100vw",
            height: "100vh",
            borderBottomLeftRadius: "100%",
            transform: "translate(-100%, -30%)",
            left: "100%",
            background: alpha(theme.palette.primary.dark, 0.07),
          },
        }}
      >
        <Grid
          xs={6}
          item
          container
          direction="column"
          justifyContent="center"
          sx={{
            paddingLeft: 8,
          }}
        >
          <Typography variant="h1">
            Titolo webion
          </Typography>
          <Divider sx={{background: theme.palette.secondary.main, width: "80%"}}/>
          <Typography variant="h6" sx={{marginTop: 2}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dignissim neque, vitae elementum orci. Donec molestie non ex vitae ullamcorper.
          </Typography>
          <Box pt={3}>
            <Button 
              variant="contained"
              endIcon={<ArrowForwardRounded/>}  
            >
              Scopri di più
            </Button>
          </Box>
        </Grid>
        <Grid
          xs={6}
          item
          container
          direction="column"
          justifyContent="center"
        >
          <Website svgProps={{width: "80%"}}/>
        </Grid>
      </Grid>
    </Stack>
  )
}