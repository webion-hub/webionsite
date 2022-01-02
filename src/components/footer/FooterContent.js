import { Stack, useMediaQuery } from "@mui/material";
import React from "react";
import theme from "../../theme/theme";

export default function FooterContent({children}) {
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))

  const getAlignItems = (index) => {
    if (isMobileView)
      return "center"

    if (index === 0)
      return "flex-start"

    if (index === children.length -1)
      return "flex-end"

    return "center"
  }

  const childrenWithProps = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      alignItems: getAlignItems(index),
    });
  });

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        maxWidth: 1800,
        margin: "0 auto",
      }}
    >
      <Stack
        direction={isMobileView ? "column-reverse" : "row"}
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{
          width: "100%",
          marginTop: 2,
          marginBottom: 2,
          "& > *": {
            width: "100%",
          },
        }}
      >
        {childrenWithProps}
      </Stack>
    </Stack>
  )
}