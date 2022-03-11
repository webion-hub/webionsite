import { Paper } from "@mui/material";
import ContactUsForm from "../../components/contact-components/ContactUsForm";
import ContactInfo from "../../components/contact-components/ContactInfo";

export default function ContactUsCard() {
  return (
    <Paper
      sx={{
        padding: 4,
      }}
    >
      <ContactUsForm/>
      <ContactInfo/>
    </Paper>
  )
}
