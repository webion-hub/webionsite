import React, { useEffect } from "react";
import { EventsDispatcher } from "../../lib/EventsDispatcher"
import useSideBarButton from "./useSideBarButton";

const useSidebar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

  const sideBarEvent = EventsDispatcher.setEvent('updateSideBar')

  useEffect(() => {
    sideBarEvent.listen(updateSidebarForListener)

    return _ => sideBarEvent.unlisten(updateSidebarForListener)
  }, [])

  const updateSidebarForListener = (status) => {
    setIsSideBarOpen(status[0])
  }

  const handleSideBarOpen = (status) => {
    setIsSideBarOpen(status)
    sideBarEvent.update(status);
  }


  const toggleSidebar = () => {
    handleSideBarOpen(!isSideBarOpen)
  }

  return {
    isSideBarOpen,
    setSideBarOpen: handleSideBarOpen,
    toggleSidebar: toggleSidebar,

    ...useSideBarButton(),
  }
}

export default useSidebar;