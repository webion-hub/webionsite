import { Stack } from "@mui/material";
import React from "react";

export default function AppBarContent({children}) {
  const startSection = []
  const endSection = []

  React.Children.map(children, (child) => {
    const sectionPosition = {
      "start": _ => startSection.push(child),
      "end": _ => endSection.push(child),
    }[child.props.sectionAlignment]

    sectionPosition?.();
  });

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{width: "100%"}}
      >
        {startSection}
      </Stack>
      {endSection}
    </>
  )
}