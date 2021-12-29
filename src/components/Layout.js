import CustomAppBar from "./CustomAppBar";
import { Button } from '@mui/material';
import AnimatedLogo from './AnimatedLogo';
import { useNavigate } from "react-router";

export default function Layout(props){
  const navigate = useNavigate();

  return (
    <>
      <CustomAppBar
        rightChildren={
          <Button 
            color="secondary" 
            variant="oulined"
            onClick={_ => navigate("/contattaci")}
          >
            Contattaci
          </Button>
        }
      >
        <AnimatedLogo
          label="Webion"
          src="./images/logo.png"
          onClick={_ => navigate("/")}
        />
        <Button 
          color="secondary" 
          onClick={_ => navigate("/chi-siamo")}
        >
          Chi siamo
        </Button>
        <Button 
          color="secondary" 
          onClick={_ => navigate("/progetti")}
        >
          Progetti
        </Button>
      </CustomAppBar>
      {props.children}
    </>
  )
}