import { Button, ToggleButton, useScrollTrigger } from '@mui/material';

import SideBarButton from "../side_bar/SidebarButton";
import AnimatedLogo from '../buttons/AnimatedLogo';

import AppBar from "../app_bar/AppBar";
import AppBarContent from "../app_bar/AppBarContent";
import AppBarSection from "../app_bar/AppBarSection";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function WebionAppBar() {
  const { t, i18n } = useTranslation() 
  const [lang, setLang] = useState('it')
  const trigger = useScrollTrigger({
    target: window,
    threshold: 200,
    disableHysteresis: true
  });

  const handleChangeLanguage = () => {
    const newLanguage = lang == 'it' 
      ? 'en' 
      : 'it'

    i18n.changeLanguage(newLanguage)
    setLang(newLanguage)
  }

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
              {t('navbar-button1')}
            </Button>
            <Button
              color="info"
              href="/#progetti"
              onClick={_ => window.location = "/#progetti"}
            >
              {t('navbar-button2')}
            </Button>
            <Button
              color="info"
              variant="outlined"
              href="/#contattaci"
              onClick={_ => window.location = "/#contattaci"}
            >
              {t('navbar-button3')}
            </Button>

            <ToggleButton
              size='small'
              value={lang}
              onClick={handleChangeLanguage}
            >
              {lang}
            </ToggleButton>
          </AppBarSection>
          <SideBarButton/>
        </AppBarSection>

      </AppBarContent>
    </AppBar>
  )
}