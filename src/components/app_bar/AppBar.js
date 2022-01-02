import { AppBar as MuiAppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { alpha, Stack } from '@mui/material';
import theme from '../../Theme';

export default function AppBar({children}) {
  return (
    <MuiAppBar
      position="fixed"
      sx={{
        backdropFilter: "blur(20px)",
        background: alpha(theme.palette.primary.main, 0.03),
        borderBottom: theme.shape.border.main,
        "& + *": {
          marginTop: theme.mixins.toolbar.minHeight + "px",
        },
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{width: "100%"}}
        >
          {children}
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
}