import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';

import SideBar from "../side_bar/SideBar";
import SideBarItem from "../side_bar/SideBarItem";
import { useTranslation } from 'react-i18next';

export default function WebionSideBar() {
  const { t } = useTranslation() 

  return (
    <SideBar showOnlyOnMobile>
      <SideBarItem
        text={t('navbar-button1')}
        icon={<GroupsRoundedIcon/>}
        href="/#servizi"
        onClick={_ => window.location = "/#servizi"}
      />
      <SideBarItem
        text={t('navbar-button2')}
        icon={<DesignServicesRoundedIcon/>}
        href="/#progetti"
        onClick={_ => window.location = "/#progetti"}
      />
      <SideBarItem
        text={t('navbar-button3')}
        icon={<ContactPageRoundedIcon/>}
        href="/#contattaci"
        onClick={_ => window.location = "/#contattaci"}
      />
    </SideBar>
  )
}