import { Link, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import useSidebar from "./useSideBar";

export default function SideBarItem({text, icon, href}) {
  const {setSideBarOpen} = useSidebar();

  return (
    <ListItem
      button
      component={Link}
      href={href}
      onClick={_ => setSideBarOpen(false)}
    >
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text}/>
    </ListItem>
  );
}