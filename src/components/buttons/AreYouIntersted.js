import { Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import GapUtils from "../../lib/GapUtils";

export default function AreYouInterested() {
  const { t } = useTranslation() 

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        ...GapUtils.gap(1, 'both'),
        marginTop: 6,
      }}
    >
      <Typography>
        {t('AIDA-action')}
      </Typography>
      <Button
        variant="contained"
        href="/#contattaci"
        onClick={_ => window.location = "/#contattaci"}
      >
        {t('contact-us-button')}
      </Button>
    </Grid>
  )
}