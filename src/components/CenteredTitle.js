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
          xs: 2,
          md: 5,
        },
      }}>
      <Typography
        variant={props.variant}
        color={props.color}
        align="center"
      >
        {props.text}
      </Typography>
    </Grid>
  );
}
