import { Box, Stack, Typography, } from '@mui/material';
import ProjectBox from '../components/Projects/ProjectBox';
import * as React from 'react';
export default function Projects() {
  return (
    <>
      <br /><br /><br />
      <Stack sx={{
        backgroundColor: "white",
        height: "100vh",
        padding: {xs: 2, md: 8},
      }}>
        <center>
          <br /><br /><br />
          <Typography variant="h2" color="black">
            I nostri progetti
          </Typography>
          <br /><br /><br />
          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ProjectBox src="https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum."/>
            <ProjectBox src="https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum."/>
            <ProjectBox src="https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum."/>
            <ProjectBox src="https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum."/>
          </Box>
        </center>
      </Stack>
    </>
  );
}