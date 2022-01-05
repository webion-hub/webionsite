import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';

export default function BlockImageAndText(props) {
  return (
    <Grid
      item
      sm={8}
      md={4}
      xs={12}
      sx={{
        maxWidth: "400px",
        marginTop: 1,
      }}
    >
      <Paper
        elevation={6}
      >
        <props.icon skeletonProps={{size: 'wide'}}/>
        <Typography sx={{ margin: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum.
        </Typography>
      </Paper>
    </Grid>
  );
}
