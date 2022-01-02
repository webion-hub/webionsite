import * as React from 'react';
import { Grid, Typography } from '@mui/material';

export default function CenteredTitle(props) {
  return (
    <Grid
      xs={12}
      item
      justifyContent="center"
      sx={{
        margin: {
          xs: 0,
          md: 10,
        },
      }}>
      <Typography
        variant="h3"
        color="secondary"
        align="center"
      >
        {props.text}
      </Typography>
    </Grid>
  );
}
