import * as React from 'react';
import { Grid } from '@mui/material';
import Img from './Img';
import theme from '../theme/theme';

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
        padding: 3,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[1],
      }} />
    </Grid>
  );
}
