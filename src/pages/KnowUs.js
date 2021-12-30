import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import MainImage from '../components/MainImage';
import { alpha } from '@mui/material';
import BlockImageAndText from '../components/BlockImageAndText.js';
import { Personalization, Programming, Speed } from '../components/illustrations/illustrations';

export default function KnowUs(props) {
  return (
    <Paper sx={{
      position: "relative",
      backgroundColor: "#091549",
    }}>
      <Grid container spacing={2} sx={{ marginTop: 8 }}>
        <MainImage src="./illustrations/team.svg" />
        <Grid 
          xs={12} 
          item
          container 
          justifyContent="center" 
          sx={{ margin: 4 }}
        >
          <Typography
            variant="h5"
            color="secondary"
            align="center"  
          >
            Siamo un gruppo di tre ragazzi che mangiano troppo pokè e non seguono le lezioni.
          </Typography>
        </Grid>
        <Grid xs={12} item justifyContent="center" sx={{ margin: 10 }}>
          <Typography
            variant="h3"
            color="secondary"
            align="center"
          >
            Perchè sceglierci?
          </Typography>
        </Grid>
        <Grid xs={12} item justifyContent="center" container direction="row" sx={{ paddingLeft: 12, paddingRight: 12, margin: 1, maxWidth: "1350px !important", margin: "0 auto"}} spacing={3} >
          <BlockImageAndText icon={Programming}></BlockImageAndText>
          <BlockImageAndText icon={Personalization}></BlockImageAndText>
          <BlockImageAndText icon={Speed}></BlockImageAndText>
        </Grid>
      </Grid>
    </Paper>
  );
}