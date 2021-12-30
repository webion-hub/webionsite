import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import { alpha } from '@mui/material';
import BlockImageAndText from './BlockImageAndText.js';

export default function MainImage(props) {
  return (<>
    <Grid 
      item
      xs={12}
      container
      direction="column"
      justifyContent="center"
    >
      <img src={props.src} style={{ border: "1px solid white;", width: "600px", margin: "0 auto", backgroundColor: "white", padding: "20px", borderRadius: "20px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} />
    </Grid>
  </>);
}