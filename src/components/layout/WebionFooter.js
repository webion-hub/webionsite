import { alpha, Button, Grid, IconButton, Link, Stack } from '@mui/material';

import Footer from "../footer/Footer";
import FooterColumn from "../footer/FooterColumn";
import FooterBottomLabel from "../footer/FooterBottomLabel";
import FooterContent from "../footer/FooterContent";

import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { EmailRounded } from '@mui/icons-material';

import { GitHubIcon, LinkedinIcon } from "../illustrations/illustrations";
import Logo from "../buttons/Logo";
import { openEmail, openTelephone } from '../../lib/openContact';
import theme from '../../theme/theme';
import GapUtils from '../../lib/GapUtils';
import { useTranslation } from 'react-i18next';

export default function WebionFooter() {
  const { t } = useTranslation() 

  return (
    <Footer>
      <FooterContent>
        <FooterColumn>
          <Button
            startIcon={<GroupsRoundedIcon/>}
            color="info"
            fullWidth
            href="/#servizi"
            onClick={_ => window.location = "/#servizi"}
          >
            {t('navbar-button1')}
          </Button>
          <Button
            startIcon={<DesignServicesRoundedIcon/>}
            color="info"
            fullWidth
            href="/#progetti"
            onClick={_ => window.location = "/#progetti"}
          >
            {t('navbar-button2')}
          </Button>
          <Button
            startIcon={<ContactPageRoundedIcon/>}
            color="info"
            fullWidth
            href="/#contattaci"
            onClick={_ => window.location = "/#contattaci"}
          >
            {t('navbar-button3')}
          </Button>
        </FooterColumn>

        <FooterColumn>
          <Stack
            direction="row"
          >
            <IconButton
              href="https://github.com/webion-hub"
              target="_blank"
            >
              <GitHubIcon/>
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/company/webion-srl"
              target="_blank"
            >
              <LinkedinIcon/>
            </IconButton>
            <Logo
              href="/#home"
              onClick={_ => window.location = "/#home"}
              ButtonComponent={IconButton}
              color="info"
            />
          </Stack>

          <Button
            endIcon={<PrivacyTipRoundedIcon/>}
            color="info"
            fullWidth
            href='/policies-licenze'
            onClick={_ => window.location = "/policies-licenze"}
          >
            {t('policies')}
          </Button>

          <FooterLink
            Icon={EmailRounded}
            label="amministrazione@webion.it"
            onClick={openEmail('amministrazione@webion.it')}
          />
          <FooterLink
            Icon={LocalPhoneRoundedIcon}
            label="+39 389 008 6632"
            onClick={openTelephone('+39 389 008 6632')}
          />
        </FooterColumn>
      </FooterContent>

      <FooterBottomLabel
        variant="body2"
      >
        {t('p-iva')}
        <Link
          href=""
          sx={{
            marginLeft: 1,
          }}
          color="inherit"
          onClick={openEmail('webionsrl@legalmail.it')}
        >
          webionsrl@legalmail.it
        </Link>
      </FooterBottomLabel>
    </Footer>
  )
}

function FooterLink({label, Icon, onClick}) {
  return (
    <Grid
      component={Link}
      href=""
      sx={{
        ...GapUtils.gap(1, "row"),
        color: theme.palette.info.main,
        textDecorationColor: alpha(theme.palette.info.main, 0.4),
      }}
      onClick={onClick}
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
    >
      {label}
      <Icon
        fontSize="small"
        sx={{marginRight: "3px"}}
        color="info"
      />
    </Grid>
  )
}