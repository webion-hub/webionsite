import { ButtonBase, Grid, Paper, Typography } from "@mui/material";
import { Box } from '@mui/system';
import theme from "../../theme/theme";
import { GitHubIcon } from "../illustrations/illustrations";

export default function DiscoverOnGitHub() {
  return (
    <Paper
      sx={{
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: 2,
        width: "fit-content",
      }}
    >
      <Grid
        component={ButtonBase}
        container
        direction="row"
        alignItems="center"
        href="https://github.com/webion-hub"
        target="_blank"
        sx={{
          padding: 2,
          borderRadius: theme.components.MuiPaper.styleOverrides.rounded.borderRadius + "px",
        }}
        gap={1}
      >
        <Box>
          <GitHubIcon skeletonProps={{sx: {width: 'auto'}}}/>
        </Box>
        <Typography
          variant="body2"
          color="textSecondary"
        >
          Visualizza il codice di <br/>
          questo sito su github
        </Typography>
      </Grid>
    </Paper>
  )
}