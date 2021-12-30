import React from "react";

export default function IconContainer({Component, path}){
  const size = 24

  return (
    <Component
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
        variant: "circular"
      }}
    />
  );
}