import { Checkbox, Grid, Link, Typography } from "@mui/material";
import React from "react";

export default function PrivacyCheckBox({onChange, value, error}) {

  const getTextColor = () => {
    return error
      ? "error"
      : "textSecondary"
  }

  const handleChange = (e) => {
    onChange({
      target: {
        value: e.target.checked,
      },
    })
  }

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
    >
      <Checkbox
        color="primary"
        onChange={handleChange}
        checked={value}
      />
      <Typography
        variant="caption"
        color={getTextColor()}
        sx={{
          width: "calc(100% - 42px)",
        }}
      >
        Ho preso visione dell&apos;
        <Link
          color="inherit"
        >
          informativa sull privacy
        </Link>
      </Typography>
    </Grid>
  )
}