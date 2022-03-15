import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import { useNavigate } from "react-router";

import SideBar from "../side_bar/SideBar";
import SideBarItem from "../side_bar/SideBarItem";

export default function WebionSideBar() {
  const navigate = useNavigate();

  return (
    <SideBar showOnlyOnMobile>
      <SideBarItem
        text="Servizi"
        icon={<GroupsRoundedIcon/>}
        href="/#servizi"
        onClick={_ => navigate("/#servizi")}
      />
      <SideBarItem
        text="Progetti"
        icon={<DesignServicesRoundedIcon/>}
        href="/#progetti"
        onClick={_ => navigate("/#progetti")}
      />
      <SideBarItem
        text="Contattaci"
        icon={<ContactPageRoundedIcon/>}
        href="/#contattaci"
        onClick={_ => navigate("/#contattaci")}
      />
    </SideBar>
  )
}