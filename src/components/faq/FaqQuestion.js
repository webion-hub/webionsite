import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function FaqQuestion(props) {
  return (
    <Accordion sx={{
      borderRadius: 0,
    }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: {xs: "130%", md: "150%"},
          }}>
          {props.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography align="left">
          {props.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}