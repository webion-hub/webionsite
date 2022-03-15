import React, { useEffect } from "react";
import { EventsDispatcher } from "../lib/EventsDispatcher"

const useSideBarButton = () => {
  const [showSideBarButton, setShowSideBarButton] = React.useState(false);

  const sideBarButtonEvent = EventsDispatcher.setEvent('hideSideBarButton')

  useEffect(() => {
    sideBarButtonEvent.listen(updateButtonForListener)

    return _ => sideBarButtonEvent.unlisten(updateButtonForListener)
  }, [])


  const updateButtonForListener = (status) => {
    setShowSideBarButton(status[0])
  }

  const handleButton = (status) => {
    setShowSideBarButton(status)
    sideBarButtonEvent.update(status);
  }

  return {
    setButtonVisibility: handleButton,
    shouldShowButton: showSideBarButton,
  }
}

export default useSideBarButton;