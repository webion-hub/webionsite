import { Stack } from '@mui/material';
import { Box } from "@mui/system";
import theme from '../../Theme';

export default function Footer({children}){
  return (
    <Box
      sx={{
        width: "100vw",
        background: theme.palette.background.dark
      }}
    >
      {children}
    </Box>
  )
}