import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import React from 'react';
import useSidebar from './useSideBar';
import EmptyComponent from '../EmptyComponent';

export default function SideBarButton() {
  const {toggleSidebar, shouldShowButton} = useSidebar();

  if (shouldShowButton)
    return (
      <IconButton
        onClick={toggleSidebar}
      >
        <MenuRoundedIcon/>
      </IconButton>
    );

  return <EmptyComponent/>
}