import { Button, Grid, Paper } from "@mui/material";
import React from "react";
import Page from "../../components/page-components/Page";
import PageContent from "../../components/page-components/PageContent";
import Sections from "../../components/Sections";
import CookiePolicy from "./sections/CookiePolicy";
import Licenses from "./sections/Licenses";
import PrivacyPolicy from "./sections/PrivacyPolicy";

import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';
import CookieRoundedIcon from '@mui/icons-material/CookieRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import theme from "../../theme/theme";

export default function PoliciesAndLicenses() {
  return (
    <Page
      justifyContent="flex-start"
      sx={{
        minHeight: "90vh",
        overflow: "hidden",
        marginTop: theme.mixins.toolbar.minHeight + "px",
      }}
    >
      <PageContent>
        <Sections
          sx={{
            "& > section": {
              marginBlock: 2,
            },
          }}
        >
          <section id="sections">
            <Grid
              component={Paper}
              container
              direction="row"
              sx={{
                padding: 2,
              }}
              gap={2}
            >
              <Button
                href="/policies-licenze#privacy"
                variant="contained"
                color="primary"
                startIcon={<PrivacyTipRoundedIcon/>}
              >
                Privacy Policy
              </Button>
              <Button
                href="/policies-licenze#cookie"
                variant="contained"
                color="primary"
                startIcon={<CookieRoundedIcon/>}
              >
                Cookie Policy
              </Button>
              <Button
                href="/policies-licenze#licenses"
                variant="contained"
                color="primary"
                startIcon={<ArticleRoundedIcon/>}
              >
                Licenze
              </Button>
            </Grid>
          </section>
          <section id="privacy">
            <PrivacyPolicy/>
          </section>
          <section id="cookie">
            <CookiePolicy/>
          </section>
          <section id="licenses">
            <Licenses/>
          </section>
        </Sections>

      </PageContent>
    </Page>
  )
}