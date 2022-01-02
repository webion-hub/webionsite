import { ListItem, ListItemIcon, ListItemText } from "@mui/material";


export default function SideBarItem({text, icon, onClick}) {
  return (
    <ListItem
      button
      onClick={onClick}
    >
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text}/>
    </ListItem>
  );
}