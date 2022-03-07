import { AppBar as MuiAppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

export default function AppBar({sx, children}) {
  return (
    <MuiAppBar
      position="fixed"
      sx={sx}
    >
      <Toolbar>
        {children}
      </Toolbar>
    </MuiAppBar>
  );
}