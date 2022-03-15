import React from "react";

export default function RotatingCirleGroup({
  children,
  bottom,
  top,
  right,
  left,
  transform
}) {

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, {sx: {
      position: "absolute",
      transform: transform,
      bottom: bottom,
      top: top,
      right: right,
      left: left,
      zIndex: -1,
    }});
  });

  return childrenWithProps
}

RotatingCirleGroup.defautlProps = {
  bottom: "auto",
  top: "auto",
  right: "auto",
  left: "auto",
}
