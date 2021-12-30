import * as React from 'react';
import { Grid, Typography } from '@mui/material';

export default function CenteredText(props) {
  return (
    <Grid
      xs={12}
      item
      container
      justifyContent="center"
      sx={{ margin: 4 }}
    >
      <Typography
        variant= {props.variant}
        color="secondary"
        align="center"
      >
        {props.text}
      </Typography>
    </Grid>
  );
}