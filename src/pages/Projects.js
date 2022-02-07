import { Box, Stack, Typography, } from '@mui/material';
import ProjectBox from '../components/Projects/ProjectBox';
import * as React from 'react';
export default function Projects() {
  return (
    <>
      <br /><br /><br />
      <Stack sx={{
        backgroundColor: "white",
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
            <ProjectBox src="https://i.ibb.co/f0PvHZ5/yoga-Website.png" title="Yoga corfu Holidays" link="https://www.yogacorfuholidays.com/" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum."/>
            <ProjectBox src="https://i.ibb.co/0FYZ41z/Mentorz.png" title="Mentorz" link="https://mentorz.fr/" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum."/>
            <ProjectBox src="https://i.ibb.co/qjsfvp1/elfo-Avventure.png" link="https://www.elfoavventure.it/" title="Elfo Avventure" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum."/>
            <ProjectBox src="https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1" link="" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum."/>
            <ProjectBox src="https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1" link="" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum."/>
            <ProjectBox src="https://i1.wp.com/potafiori.com/wp-content/uploads/2020/04/placeholder.png?ssl=1" link="" title="Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ex, accumsan non enim porttitor, mattis faucibus arcu. Curabitur lobortis vehicula fermentum."/>
          </Box>
        </center>
        <br /><br /><br />
      </Stack>
      
    </>
  );
}