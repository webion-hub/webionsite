import AppBar from "./app_bar/AppBar";
import { Button, Grid, Icon, IconButton, Paper, Stack } from '@mui/material';
import AnimatedLogo from './buttons/AnimatedLogo';
import { useNavigate } from "react-router";
import Logo from "./buttons/Logo";

import Footer from "./footer/Footer";
import FooterColumn from "./footer/FooterColumn";
import FooterBottomLabel from "./footer/FooterBottomLabel";

import StartAppBarSection from "./app_bar/StartAppBarSection";
import FooterContent from "./footer/FooterContent";

import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import { InstagramIcon, LinkedinIcon } from "./illustrations/illustrations";

export default function Layout(props) {
  const navigate = useNavigate();

  return (
    <>
      <AppBar>
        <StartAppBarSection>
          <AnimatedLogo
            label="Webion"
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
        </StartAppBarSection>
        <Button 
          color="secondary" 
          variant="outlined"
          onClick={_ => navigate("/contattaci")}
        >
          Contattaci
        </Button>
      </AppBar>
      {props.children}
      <Footer>
        <FooterContent>
          <FooterColumn>
            <Button 
              startIcon={<GroupsRoundedIcon/>}
              color="secondary"
              fullWidth
            >
              Chi siamo
            </Button>
            <Button 
              startIcon={<DesignServicesRoundedIcon/>}
              color="secondary"
              fullWidth
            >
              Progetti
            </Button>
            <Button 
              startIcon={<ContactPageRoundedIcon/>}
              color="secondary"
              fullWidth
            >
              Contattaci
            </Button>
          </FooterColumn>
  
          <FooterColumn>
            <Stack
              direction="row"
            >
              <IconButton>
                <InstagramIcon/>
              </IconButton>
              <IconButton>
                <LinkedinIcon/>
              </IconButton>
              <Logo 
                ButtonComponent={IconButton}
                color="secondary"
              />
            </Stack>

            <Button
              endIcon={<PrivacyTipRoundedIcon/>}
              color="secondary"
              fullWidth
            >
              Privacy
            </Button>
            <Button
              endIcon={<LiveHelpRoundedIcon/>}
              color="secondary"
              fullWidth
            >
              Faq
            </Button>
          </FooterColumn>
        </FooterContent>
        
        <FooterBottomLabel
          variant="body2"
        >
          Codice ateco 33.20.03 C.F. e P. Iva 03634570364 C.C.I.A.A. MO -404681
        </FooterBottomLabel>
      </Footer>
    </>
  )
}

