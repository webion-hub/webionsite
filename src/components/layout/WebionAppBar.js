import { Button } from '@mui/material';
import { useNavigate } from "react-router";

import SideBarButton from "../side_bar/SidebarButton";
import AnimatedLogo from '../buttons/AnimatedLogo';

import AppBar from "../app_bar/AppBar";
import AppBarContent from "../app_bar/AppBarContent";
import AppBarSection from "../app_bar/AppBarSection";


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
          </AppBarSection>
        </AppBarSection>

        <AppBarSection alignment="end">
          <AppBarSection hideOnMobile>
            <Button
              color="secondary"
              variant="outlined"
              onClick={_ => navigate("/contattaci")}
            >
              Contattaci
            </Button>
          </AppBarSection>
          <SideBarButton/>
        </AppBarSection>

      </AppBarContent>
    </AppBar>
  )
}