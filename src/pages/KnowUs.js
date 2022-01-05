import * as React from 'react';
import { Grid } from '@mui/material';
import MainImage from '../components/MainImage';
import BlockImageAndText from '../components/BlockImageAndText';
import { Personalization, Programming, Speed } from '../components/illustrations/illustrations';
import CenteredTitle from '../components/CenteredTitle';
import CenteredText from '../components/CenteredText';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../theme/theme';

export default function KnowUs(_props) {
  const matches = useMediaQuery(
    theme.breakpoints.up('md')
  );

  return (
    <Grid container sx={{ marginTop: 9 }}>
      <MainImage src="./illustrations/team.svg" />
      <CenteredText
        variant={matches ? "h6" : "subtitle1"}
        text="Siamo un gruppo di tre ragazzi che mangiano troppo pokè e non seguono le lezioni."
      />
      <CenteredTitle text="Perché sceglierci" />
      <Grid
        container
        item
        xs={12}
        sx={{
          maxWidth: "1350px !important",
          margin: "0 auto",
          "& > *": {
            padding: 1,
          },
        }}
        justifyContent="center"
        direction="row"
      >
        <BlockImageAndText icon={Programming}></BlockImageAndText>
        <BlockImageAndText icon={Personalization}></BlockImageAndText>
        <BlockImageAndText icon={Speed}></BlockImageAndText>
      </Grid>
    </Grid>
  );
}
