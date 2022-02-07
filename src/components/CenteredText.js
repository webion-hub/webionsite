import * as React from 'react';
import { Grid, Typography } from '@mui/material';

export default function CenteredText(props) {
  return (
    <Grid
      xs={12}
      item
      container
      direction="column"
      justifyContent="center"
    >
      <Typography
        variant= {props.variant}
        color={props.color}
        align="justify"        
        sx={{
          marginTop: 4,
        }}
      >
        {props.text}
      </Typography>
    </Grid>
  );
}
