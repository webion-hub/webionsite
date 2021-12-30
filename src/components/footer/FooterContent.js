import { Stack, useMediaQuery } from "@mui/material";
import React from "react";
import theme from "../../Theme";

export default function FooterContent({children}){
  const mobileView = useMediaQuery(theme.breakpoints.down('sm'))

  const getAlignItems = (index) => {
    if(mobileView)
      return "center"

    if(index === 0)
      return "flex-start"

    if(index === children.length -1)
      return "flex-end"

    return "center"
  }

  const childrenWithProps = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      alignItems: getAlignItems(index)
    });
  });

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        maxWidth: 900,
        margin: "0 auto"
      }}
    >
      <Stack
        direction={mobileView ? "column-reverse" : "row"}
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{
          width: "100%",
          marginTop: 2,
          marginBottom: 2,
          "& > *": {
            width: "100%"
          }
        }}
      >
        {childrenWithProps}
      </Stack>
    </Stack>
  )
}