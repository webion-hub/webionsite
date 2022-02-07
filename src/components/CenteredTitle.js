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
          xs: 1,
          md: 1,
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
