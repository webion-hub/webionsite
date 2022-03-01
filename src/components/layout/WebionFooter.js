import { Button, IconButton, Stack } from '@mui/material';
import { useNavigate } from "react-router";

import Footer from "../footer/Footer";
import FooterColumn from "../footer/FooterColumn";
import FooterBottomLabel from "../footer/FooterBottomLabel";
import FooterContent from "../footer/FooterContent";

import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';

import { InstagramIcon, LinkedinIcon } from "../illustrations/illustrations";
import Logo from "../buttons/Logo";

export default function WebionFooter() {
  const navigate = useNavigate();

  return (
    <Footer>
      <FooterContent>
        <FooterColumn>
          <Button
            startIcon={<GroupsRoundedIcon/>}
            color="info"
            fullWidth
            onClick={_ => navigate("/chi-siamo")}
          >
            Chi siamo
          </Button>
          <Button
            startIcon={<DesignServicesRoundedIcon/>}
            color="info"
            fullWidth
            onClick={_ => navigate("/progetti")}
          >
            Progetti
          </Button>
          <Button
            startIcon={<ContactPageRoundedIcon/>}
            color="info"
            fullWidth
            onClick={_ => navigate("/contattaci")}
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
              color="info"
            />
          </Stack>

          <Button
            endIcon={<PrivacyTipRoundedIcon/>}
            color="info"
            fullWidth
          >
            Privacy
          </Button>
          <Button
            endIcon={<LiveHelpRoundedIcon/>}
            color="info"
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
  )
}