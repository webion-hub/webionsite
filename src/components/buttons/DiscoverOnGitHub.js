import { ButtonBase, Grid, Paper, Typography } from "@mui/material";
import { Box } from '@mui/system';
import theme from "../../theme/theme";
import { GitHubIcon } from "../illustrations/illustrations";
import GapUtils from "../../lib/GapUtils";
import { useTranslation } from "react-i18next";

export default function DiscoverOnGitHub() {
  const { t } = useTranslation() 

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
          ...GapUtils.gap(2, 'row'),
          padding: 2,
          borderRadius: theme.components.MuiPaper.styleOverrides.rounded.borderRadius + "px",
        }}
      >
        <Box>
          <GitHubIcon skeletonProps={{sx: {width: 'auto'}}}/>
        </Box>
        <Typography
          variant="body2"
          color="textSecondary"
        >
          {t('github-button')}
        </Typography>
      </Grid>
    </Paper>
  )
}