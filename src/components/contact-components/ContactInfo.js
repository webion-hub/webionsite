import { Divider, Grid } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import ContactItem from "./ContactItem";


export default function ContactInfo() {
  return (
    <Grid
      container
      direction="column"
      gap={1}
    >
      <Divider/>
      <ContactItem
        Icon={EmailRoundedIcon}
        label="amministrazione@webion.it"
        onClick={() => {
          const email = 'amministrazione@webion.it';
          document.location = "mailto:"+email
        }}
      />
      <ContactItem
        Icon={LocalPhoneRoundedIcon}
        label="+39 389 008 6632"
        onClick={() => {
          window.open('tel:+39 389 008 6632');
        }}
      />
    </Grid>
  )
}