import { ArrowForwardRounded } from "@mui/icons-material";
import { Grid, Typography, Button, Divider, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../theme/theme";

const buttonDefaultProps = {
  variant: "outlined",
  color: "secondary",
  endIcon: <ArrowForwardRounded/>,
}

const gridDefaultProps = {
  container: true,
  direction: "column",
  justifyContent: "center",
}

export default function TitleParagraph({
  title,
  subtitle,
  buttonLabel,
  buttonProps,
  ...gridProps
}) {
  const _buttonProps = {
    ...buttonProps,
    ...buttonDefaultProps,
  }

  const _gridProps = {
    ...gridProps,
    ...gridDefaultProps,
  }

  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid
      {..._gridProps}
    >
      <Typography
        variant={isMobileView ? "h2" : "h1"}
        component="h1"
      >
        {title}
      </Typography>
      <Divider sx={{background: theme.palette.secondary.main, width: "100%"}}/>
      <Typography variant="h6" sx={{marginTop: 2}}>
        {subtitle}
      </Typography>
      <Box pt={3}>
        <Button
          {..._buttonProps}
        >
          {buttonLabel}
        </Button>
      </Box>
    </Grid>
  )
}