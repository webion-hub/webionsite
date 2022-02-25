import { darken, Grid, Paper, Typography } from "@mui/material";
import theme from "../theme/theme";
import MaybeShow from "./MaybeShow";

export default function Card({title, description, children, sx, Icon}) {
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
          gap={2}
          sx={{
            padding: 2,
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            background: darken(theme.palette.background.default, 0.05),
          }}
        >
          {Icon && <Icon color="primary"/>}
          <Typography variant="h5">
            {title}
          </Typography>
        </Grid>
        <MaybeShow show={description}>
          <Typography sx={{padding: 2}}>
            {description}
          </Typography>
        </MaybeShow>
        {children}
      </Grid>
    </Paper>
  )
}