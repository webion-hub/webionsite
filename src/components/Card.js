import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../theme/theme";
import MaybeShow from "./MaybeShow";

export default function Card({title, description, children, sx}) {
  return (
    <Paper
      sx={{...sx}}
    >
      <Grid
        container
        direction="column"
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
          sx={{
            paddingInline: 2,
            paddingBlock: 1,
            borderTopLeftRadius: theme.components.MuiPaper.styleOverrides.rounded.borderRadius,
            borderTopRightRadius: theme.components.MuiPaper.styleOverrides.rounded.borderRadius,
            background: theme.palette.background.default,
          }}
        >
          <Typography variant="h6">
            <strong>
              {title}
            </strong>
          </Typography>
        </Grid>
        <Box
          sx={{
            padding: 2,
            paddingTop: 2,
          }}
        >
          <MaybeShow show={description}>
            <Typography align="center" variant="body2">
              {description}
            </Typography>
          </MaybeShow>
          {children}
        </Box>

      </Grid>
    </Paper>
  )
}