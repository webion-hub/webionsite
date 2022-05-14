import { Grid, Link } from "@mui/material";
import GapUtils from "../../lib/GapUtils";

export default function ContactItem({Icon, label, onClick}) {
  return (
    <Grid
      container
      direction="row"
      sx={GapUtils.gap(1, "row")}
    >
      <Icon/>
      <Link
        href=""
        color="inherit"
        onClick={e => {
          e.preventDefault()
          onClick(e)
        }}
      >
        {label}
      </Link>
    </Grid>
  )
}