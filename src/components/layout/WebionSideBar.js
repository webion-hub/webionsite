import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';

import SideBar from "../side_bar/SideBar";
import SideBarItem from "../side_bar/SideBarItem";

export default function WebionSideBar() {
  return (
    <SideBar showOnlyOnMobile>
      <SideBarItem
        text="Servizi"
        icon={<GroupsRoundedIcon/>}
        href="/#servizi"
        onClick={_ => window.location = "/#servizi"}
      />
      <SideBarItem
        text="Progetti"
        icon={<DesignServicesRoundedIcon/>}
        href="/#progetti"
        onClick={_ => window.location = "/#progetti"}
      />
      <SideBarItem
        text="Contattaci"
        icon={<ContactPageRoundedIcon/>}
        href="/#contattaci"
        onClick={_ => window.location = "/#contattaci"}
      />
    </SideBar>
  )
}