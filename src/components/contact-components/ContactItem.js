import { Grid, Link } from "@mui/material";

export default function ContactItem({Icon, label, onClick}) {
  return (
    <Grid
      container
      direction="row"
      gap={1}
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