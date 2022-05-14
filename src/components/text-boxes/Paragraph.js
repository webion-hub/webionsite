import { Grid, Typography } from "@mui/material";
import GapUtils from "../../lib/GapUtils";

export default function Paragraph({title, children}) {
  return (
    <Grid
      container
      direction="column"
      sx={GapUtils.gap(2, "column")}
    >
      <Typography variant="h4">
        {title}
      </Typography>
      {children}
    </Grid>
  )
}