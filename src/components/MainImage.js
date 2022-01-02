import * as React from 'react';
import { Grid } from '@mui/material';
import Img from './Img';

export default function MainImage(props) {
  return (
    <Grid
      item
      xs={12}
      container
      direction="column"
      justifyContent="center"
    >
      <Img src={props.src} sx={{
        border: "1px solid white;",
        width: {
          sm: "500px",
          xs: "80%",
        },
        margin: "0 auto",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }} />
    </Grid>
  );
}
