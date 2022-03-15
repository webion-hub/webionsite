import { Link, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import useSidebar from "../../hooks/useSideBar";

export default function SideBarItem({text, icon, href, onClick}) {
  const {setSideBarOpen} = useSidebar();

  return (
    <ListItem
      button
      component={Link}
      href={href}
      onClick={e => {
        onClick(e)
        setSideBarOpen(false)
      }}
    >
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text}/>
    </ListItem>
  );
}