import { Button } from '@mui/material';
import { useNavigate } from "react-router";

import SideBarButton from "../side_bar/SidebarButton";
import AnimatedLogo from '../buttons/AnimatedLogo';

import AppBar from "../app_bar/AppBar";
import AppBarContent from "../app_bar/AppBarContent";
import AppBarSection from "../app_bar/AppBarSection";
import { useEffect, useState } from 'react';

export default function WebionAppBar() {
  const [openLogo, setOpenLogo] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", updateAppBar);

    return () => window.removeEventListener("scroll", updateAppBar)
  }, [])

  const updateAppBar = () => {
    const screenHeight = window.outerHeight / 2
    const yPos = window.scrollY

    const normalizedPos = yPos / screenHeight;

    normalizedPos > 1
      ? setOpenLogo(true)
      : setOpenLogo(false)
  }

  return (
    <AppBar>
      <AppBarContent>

        <AppBarSection alignment="start" spacing={0}>
          <AnimatedLogo
            open={openLogo}
            label="Webion"
            onClick={_ => navigate("/")}
          />
        </AppBarSection>

        <AppBarSection alignment="end" justifyContent="flex-end">
          <AppBarSection hideOnMobile>
            <Button
              color="info"
              onClick={_ => navigate("/chi-siamo")}
            >
              Chi siamo
            </Button>
            <Button
              color="info"
              onClick={_ => navigate("/progetti")}
            >
              Progetti
            </Button>
            <Button
              color="info"
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