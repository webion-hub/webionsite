import { Checkbox, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PrivacyCheckBox({onChange, value, error}) {
  const { t } = useTranslation() 

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
        {t('privacy')}
        <Link
          color="inherit"
          href='/policies-licenze'
          onClick={_ => window.location = "/policies-licenze"}
        >
          {t('privacy-link')}
        </Link>
      </Typography>
    </Grid>
  )
}