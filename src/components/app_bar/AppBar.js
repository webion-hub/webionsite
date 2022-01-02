import { AppBar as MuiAppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

export default function AppBar({children}) {
  return (
    <MuiAppBar
      position="fixed"
    >
      <Toolbar>
        {children}
      </Toolbar>
    </MuiAppBar>
  );
}