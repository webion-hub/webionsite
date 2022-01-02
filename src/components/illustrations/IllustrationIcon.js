import React from "react";
import { Illustration } from "./Illustration";

export default function IconContainer({
  path,
  size = 24,
}) {
  return (
    <Illustration
      path={path}
      boxProps={{
        display: "flex",
      }}
      svgProps={{
        ...Component.defaultProps.svgProps,
        width: size,
      }}
      skeletonProps={{
        width: size,
        height: size,
        variant: "circular",
      }}
    />
  );
}