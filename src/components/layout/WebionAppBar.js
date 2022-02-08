import { Button } from '@mui/material';
import { useNavigate } from "react-router";
import '../animations/growRotate.css';
import SideBarButton from "../side_bar/SidebarButton";
import AnimatedLogo from '../buttons/AnimatedLogo';

import AppBar from "../app_bar/AppBar";
import AppBarContent from "../app_bar/AppBarContent";
import AppBarSection from "../app_bar/AppBarSection";
import Img from '../Img';


export default function WebionAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar>
      <AppBarContent>

        <AppBarSection spacing={0}>
          <AnimatedLogo
            label="Webion"
            onClick={_ => navigate("/")}
          />
          <AppBarSection hideOnMobile>
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
            <Button
              color="secondary"
              onClick={_ => navigate("/faq")}
            >
              FAQ
            </Button>
          </AppBarSection>
        </AppBarSection>

        <AppBarSection alignment="end">
          <AppBarSection hideOnMobile>
            <Button
              className=""
              color="secondary"
              sx={{
                paddingRight: "34px",
              }}
              variant="outlined"
              onClick={_ => navigate("/contattaci")}
            >
              Contattaci  
              <i className="hvr-grow-rotate">
                <Img sx={{
                  bottom: "-2px",
                  width: "17px",
                  marginBottom: "-4px",
                }}                
                src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/telephone-receiver_1f4de.png" />
              </i>
            </Button>
          </AppBarSection>
          <SideBarButton/>
        </AppBarSection>

      </AppBarContent>
    </AppBar>
  )
}