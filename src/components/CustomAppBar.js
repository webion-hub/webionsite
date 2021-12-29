import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { alpha, Stack } from '@mui/material';
import theme from '../Theme';

export default function CustomAppBar(props) {
  return (
    <AppBar 
      position="fixed"
      sx={{
        backdropFilter: "blur(20px)",
        background: alpha(theme.palette.primary.main, 0.03),
        borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{width: "100%"}}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
          >
            {props.children}
          </Stack>
          {props.rightChildren}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}