import { Grid, Typography, useMediaQuery } from "@mui/material";
import theme from "../../theme/theme";

export default function Paragraph({title, Icon, description}) {
  const isMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid
      container
      direction="column"
      alignItems={isMd ? "center" : "flex-start"}
      gap={2}
      sx={{
        maxWidth: 500,
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent={isMd ? "center" : "flex-start"}
        gap={1}
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