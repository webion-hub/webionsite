import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MaybeShow from "./MaybeShow";

export default function Card({
  title,
  titleVariant,
  description,
  children,
  sx,
}) {
  return (
    <Paper
      sx={{...sx}}
    >
      <Grid
        container
        direction="column"
      >
        <Typography
          variant={titleVariant}
          align="center"
          sx={{marginBlock: 1}}
        >
          {title}
        </Typography>
        <Box
          sx={{
            padding: 4,
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

Card.defaultProps = {
  titleVariant: "subtitle1",
}