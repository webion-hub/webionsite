import { Stack, Grid } from "@mui/material";
import { Programmer } from "../components/illustrations/illustrations";
import theme from "../theme/theme";

export default function Home() {
  return (
    <Stack
      direction="column"
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{
          minHeight: `calc(90vh - ${theme.mixins.toolbar.minHeight}px)`,
          height: "100%",
          overflow: "hidden"
        }}
      >
        <Programmer 
          boxProps={{
            width: "25%",
            display: "flex"
          }}
        />
      </Grid>
    </Stack>
  )
}