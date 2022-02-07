import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Grid, Typography } from '@mui/material';

export default function BlockImageAndText(props) {
  return (
    <Grid
      item
      sm={8}
      md={4}
      xs={12}
      sx={{
        maxWidth: "450px",
        marginTop: 1,
      }}
    >
      <Paper
        elevation={6}
      >
        <Box sx={{
          margin: {
            xs: 1,
            sm: 3,
          },
        }}
        >
          <props.icon svgProps={{
            height: "300px",
          }}
          skeletonProps={{ size: 'wide' }}
          boxProps={{
            sx: {
              paddingInline: { xs: 1, sm: "6%" },
              maxWidth: "300px",
              margin: "0 auto",
            },
          }}
          />
          <Typography
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum.
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
