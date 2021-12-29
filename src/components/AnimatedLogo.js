import { ButtonBase, Typography } from '@mui/material';
import theme from '../Theme';

export default function AnimatedLogo(props){
  return (
    <ButtonBase
      onClick={props.onClick}
      sx={{
        "& img": {
          height: 32, 
          padding: 1,
        }, 
        "& p": {
          transition: `${theme.transitions.duration.short}ms all`,
          opacity: 0,
          transform: "translate(-100%, 0%)",
        },
        "&:hover": {
          "& p": {
            opacity: 1,
            transform: "translate(0%, 0%)",
          }
        }, 
      }}
    >
      <img src={props.src}/>
      <Typography component="p">
        {props.label}
      </Typography>
    </ButtonBase>
  )
}