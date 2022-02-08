import { Button, Grid, Typography } from '@mui/material';
import * as React from 'react';

export default function TextAndButton(props) {
  return (
    <Grid container
      item xs={12}
      alignContent="center"
      direction="row"
      justifyContent="center"
      sx={{
        alignItems: "center",
        marginTop: 5,
        marginBottom: 18,
      }}>
      <Typography sx={{color: props.color}} >
        {props.text}
      </Typography>
      <Button variant="contained" sx={{
        margin: 2,
      }}>{props.buttonText}</Button>
    </Grid>
  );
}