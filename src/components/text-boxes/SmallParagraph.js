import { Grid, Typography, useMediaQuery } from "@mui/material";
import GapUtils from "../../lib/GapUtils";
import theme from "../../theme/theme";

export default function SmallParagraph({title, Icon, description}) {
  const isMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid
      container
      direction="column"
      alignItems={isMd ? "center" : "flex-start"}
      sx={{
        ...GapUtils.gap(2, "column"),
        maxWidth: 500,
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent={isMd ? "center" : "flex-start"}
        sx={GapUtils.gap(1, "row")}
      >
        <Icon/>
        <Typography variant="h5">
          <strong>
            {title}
          </strong>
        </Typography>
      </Grid>
      <Typography
        variant="body2"
        align={isMd ? "center" : "left"}
      >
        {description}
      </Typography>
    </Grid>
  )
}