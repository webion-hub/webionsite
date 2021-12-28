import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { alpha, Button, ButtonBase, Link, Stack, Typography } from '@mui/material';
import outerTheme from '..';

export default function CustomAppBar(props) {
  const [showLogo, setShowLogo] = React.useState(false);

  return (
    <Box>
      <AppBar 
        position="fixed"
        sx={{
          backdropFilter: "blur(20px)",
          background: alpha(outerTheme.palette.primary.main, 0.03),
          borderBottom: `1px solid ${alpha(outerTheme.palette.primary.main, 0.25)}`
        }}
      >

        <Toolbar>
          <Stack
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{width: "100%"}}
          >
            <Stack
              container
              direction="row"
              alignItems="center"
              spacing={2}
            >
              <ButtonBase 
                onMouseEnter={_ => setShowLogo(true)}
                onMouseLeave={_ => setShowLogo(false)}
                sx={{
                  "& img": {
                    height: 32, 
                    padding: 1
                  }     
                }}
              >
                <img src="./images/logo.png"/>
                <Typography
                  sx={{
                    opacity: showLogo ? 1 : 0,
                    transform: showLogo ? "translate(0%, 0%)" : "translate(-100%, 0%)",
                    transition: "0.25s all",
                  }}
                >
                  Webion
                </Typography>
              </ButtonBase>
              <Button color="secondary">
                Chi siamo
              </Button>
              <Button color="secondary">
                Progetti
              </Button>
            </Stack>
            <Button color="secondary" variant="outlined">
              Contattaci
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {props.children}
    </Box>
  );
}