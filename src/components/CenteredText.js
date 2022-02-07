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
        align="center"
        sx={{
          fontWeight: 300,
          textAlign: "justify",
        }} 
      >
        {props.text}
      </Typography>
    </Grid>
  );
}
