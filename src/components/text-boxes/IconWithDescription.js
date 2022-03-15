import { Grid, Typography } from "@mui/material";
import theme from "../../theme/theme";

export default function IconWithDescription({Icon, title, description}) {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      gap={1}
      sx={{
        maxWidth: 180,
      }}
    >
      <Icon
        sx={{
          fontSize: 72,
          padding: 2,
          background: theme.palette.primary.main,
          borderRadius: "100%",
        }}
      />
      <Typography
        variant="h6"
        align="center"
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
      >
        {description}
      </Typography>
    </Grid>
  )
}