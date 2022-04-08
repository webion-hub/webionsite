import { Button, useScrollTrigger } from '@mui/material';

import SideBarButton from "../side_bar/SidebarButton";
import AnimatedLogo from '../buttons/AnimatedLogo';

import AppBar from "../app_bar/AppBar";
import AppBarContent from "../app_bar/AppBarContent";
import AppBarSection from "../app_bar/AppBarSection";

export default function WebionAppBar() {
  const trigger = useScrollTrigger({
    target: window,
    threshold: 200,
  });

  return (
    <AppBar>
      <AppBarContent>

        <AppBarSection alignment="start" spacing={0}>
          <AnimatedLogo
            open={trigger}
            label="Webion"
            href="/#home"
            onClick={_ => window.location = "/#home"}
          />
        </AppBarSection>

        <AppBarSection alignment="end" justifyContent="flex-end">
          <AppBarSection hideOnMobile>
            <Button
              color="info"
              href="/#servizi"
              onClick={_ => window.location = "/#servizi"}
            >
              Servizi
            </Button>
            <Button
              color="info"
              href="/#progetti"
              onClick={_ => window.location = "/#progetti"}
            >
              Progetti
            </Button>
            <Button
              color="info"
              variant="outlined"
              href="/#contattaci"
              onClick={_ => window.location = "/#contattaci"}
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