import { Paper, Typography, useMediaQuery } from "@mui/material";
import { alpha } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import BinaryBackground from "../../../components/backgrounds/BinaryBackground.js";
import ButtonCircled from "../../../components/buttons/ButtonCircled";
import Page from "../../../components/page-components/Page.js";
import RotatingCirleGroup from "../../../components/svgs/RotatingCirlceGroup.js";
import RotatingDashedCirlce from "../../../components/svgs/RotatingDashedCirlce";
import theme from "../../../theme/theme";

export default function Home() {
  const { t } = useTranslation() 
  const isMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Page
      justifyContent="center"
      sx={{
        minHeight: "90vh",
        overflow: "hidden",
      }}
    >
      <Paper
        sx={{
          margin: "0 auto",
          padding: 4,
          width: isMd ? "90%" : "auto",
          maxWidth: 800,
        }}
      >
        <Typography
          variant={isMd ? "h4" : "h3"}
          component="h1"
          align={isMd ? "center" : "left"}
        >
          <strong>{t('title-bold')}</strong>
        </Typography>
        <Typography
          variant={isMd ? "h4" : "h2"}
          component="h1"
          align={isMd ? "center" : "left"}
        >
          {t('title')}
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          color="textSecondary"
          sx={{marginTop: 2}}
          align={isMd ? "center" : "left"}
        >
          {t('subtitle')}
        </Typography>
        <ButtonCircled
          size="large"
          variant="contained"
          href="/#sceglierci"
          onClick={_ => window.location = "/#sceglierci"}
          sx={{
            marginTop: 4,
            width: isMd ? "100%" : "auto",
            justifyContent: isMd ? "center" : "flex-start",
            borderRadius: 26,
          }}
        >
          {t('main-button')}
        </ButtonCircled>
      </Paper>
      <BinaryBackground
        elements={[9, 7, 5, 6, 5, 7, 4, 3, 1]}
        height={180}
        sx={{
          position: "absolute",
          top: 0,
          height: "80%",
          zIndex: -1,
        }}
      />
      <RotatingCirleGroup bottom={0} right={0} transform="translate(50%, 50%)">
        <RotatingDashedCirlce
          animationDuration="180s"
          size={1500}
          strokeWidth={16}
          strokeColor={alpha(theme.palette.primary.main, 0.05)}
          strokeDasharray="200 80"
        />
        <RotatingDashedCirlce
          animationDuration="30s"
          size={1000}
          strokeWidth={4}
          strokeColor={alpha(theme.palette.primary.main, 0.1)}
          strokeDasharray="300 400"
        />
        <RotatingDashedCirlce
          animationDuration="240s"
          size={900}
          strokeWidth={8}
          strokeColor={alpha(theme.palette.primary.main, 0.2)}
          strokeDasharray="200 80"
        />
      </RotatingCirleGroup>

      <BinaryBackground
        elements={[1, 3, 2, 4]}
        height={180}
        position="bottom"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          height: "80%",
          zIndex: -1,
        }}
      />
    </Page>
  )
}