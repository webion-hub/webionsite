import { Paper, Button, Typography, Box } from '@mui/material';
import Img from '../Img';
import './animation.css';
import theme from '../../theme/theme';
export default function ProjectBox(props) {
  return (
    <Box sx={{
      margin: 1,
    }}>
      <Paper class="hvr-rectangle-in" sx={{
        borderRadius: theme.shape.borderRadius,
        //width: "clamp(300px, 25%, 600px)",
        width: 400,
        backgroundColor: "white",
        color: "black",
        padding: 2,
      }}
      elevation={6}
      >
        <center>            
          <Img src={props.src} sx={{
            width: "100%",
            maxWidth: 400,
            borderRadius: theme.shape.borderRadius,
          }}/>
          <Typography sx={{
            textAlign: "justify",
          }}>
            {props.text}
          </Typography>
          <Button variant="contained" sx={{
            marginTop: 3,
          }}>
            Guarda
          </Button>
        </center>
      </Paper>
    </Box>
  );
}