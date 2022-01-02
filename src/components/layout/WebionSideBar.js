import { useNavigate } from "react-router";

import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';

import SideBar from "../side_bar/SideBar";
import SideBarItem from "../side_bar/SideBarItem";

export default function WebionSideBar() {
  const navigate = useNavigate();

  return (
    <SideBar showOnlyOnMobile>
      <SideBarItem
        text="Chi siamo"
        icon={<GroupsRoundedIcon/>}
        onClick={_ => navigate("/chi-siamo")}
      />
      <SideBarItem
        text="Progetti"
        icon={<DesignServicesRoundedIcon/>}
        onClick={_ => navigate("/progetti")}
      />
      <SideBarItem
        text="Contattaci"
        icon={<ContactPageRoundedIcon/>}
        onClick={_ => navigate("/contattaci")}
      />
    </SideBar>
  )
}