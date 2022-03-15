import { AppBar as MuiAppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';

const AppBar = React.forwardRef(({sx, children}, ref) => {
  return (
    <MuiAppBar
      ref={ref}
      position="fixed"
      sx={sx}
    >
      <Toolbar>
        {children}
      </Toolbar>
    </MuiAppBar>
  );
})

export default AppBar