import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import Page from "../../components/page-components/Page";
import PageContent from "../../components/page-components/PageContent";
import CookiePolicy from "./sections/CookiePolicy";
import Licenses from "./sections/Licenses";
import PrivacyPolicy from "./sections/PrivacyPolicy";

import theme from "../../theme/theme";
import { ExpandMoreRounded } from "@mui/icons-material";

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
        <Typography variant="h3" sx={{marginBlock: 4}}>
          Policies e licenze
        </Typography>
        <SimpleAccordion title="Privay Policy">
          <PrivacyPolicy/>
        </SimpleAccordion>
        <SimpleAccordion title="Cookie Policy">
          <CookiePolicy/>
        </SimpleAccordion>
        <SimpleAccordion title="Licenze">
          <Licenses/>
        </SimpleAccordion>
      </PageContent>
    </Page>
  )
}

function SimpleAccordion({title, children}) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreRounded />}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}