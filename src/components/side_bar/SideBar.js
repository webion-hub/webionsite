import { List, SwipeableDrawer, useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import theme from '../../theme/theme';
import useSidebar from '../../hooks/useSideBar';
import EmptyComponent from '../utils/EmptyComponent';

export default function SideBar({children, showOnlyOnMobile}) {
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))

  const {
    isSideBarOpen,
    setSideBarOpen,
    setButtonVisibility,
  } = useSidebar();

  useEffect(() => {
    if (showOnlyOnMobile)
      setButtonVisibility(isMobileView);

  }, [isMobileView])

  if (isMobileView && showOnlyOnMobile)
    return (
      <SwipeableDrawer
        anchor="right"
        open={isSideBarOpen}
        onClose={_ => setSideBarOpen(false)}
        onOpen={_ => setSideBarOpen(true)}
      >
        <List>
          {children}
        </List>
      </SwipeableDrawer>
    );

  return <EmptyComponent/>
}

SideBar.defaultProps = {
  showOnlyOnMobile: false,
}