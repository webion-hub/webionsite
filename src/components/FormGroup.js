import { Grid } from "@mui/material";
import React from "react";

export default function FormGroup({form, onSubmit, children, ...props}) {

  const childrenWithProps = React.Children.map(children, (child) => {
    const formControlName = child.props.formControlName

    if (!formControlName)
      return child

    return React.cloneElement(child, {
      error: !form.isValid(formControlName),
      onChange: form.setValue(formControlName),
      value: form.getValue(formControlName),
    });
  });

  return (
    <Grid
      {...props}
      component="form"
      noValidate
      onSubmit={onSubmit}
    >
      {childrenWithProps}
    </Grid>
  )
}