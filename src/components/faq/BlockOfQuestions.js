import FaqQuestion from "./FaqQuestion";
import Paper from "@mui/material/Paper";
import TextAndButton from "../TextAndButton";
import { Grid } from "@mui/material";
export default function BlockOfQuestions() {
  return (
    <Grid xs="12" items justifyContent="center" direction="column" sx={{
      marginInline: {xs: 2, md: 24},
      marginTop: 11,
      marginBottom: 30,
    }}>
      <center>
        <Paper sx={{
          borderRadius: 5,
          padding: 2,
          maxWidth: "900px",
          background: "rgb(31 150 253)", //colore non definitivo
        }}>
          <FaqQuestion question="Perchè entrando in ufficio ho visto una persona sputare?" answer="E' il nostro impiegato calabrese, fa parte della sua cultura"/>
          <FaqQuestion question="Cos'è l'odore di salmone che sento mentre entro?" answer="E' Calabretti che mangia pokè"/>
          <FaqQuestion question="Lorem ipsum" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a mauris malesuada, egestas lacus at, facilisis dolor. Fusce ullamcorper hendrerit nunc vitae maximus. Quisque eros libero, commodo vitae velit sit amet, iaculis rutrum leo. Vivamus sollicitudin mi mi, vitae lobortis purus eleifend vitae."/>
          <FaqQuestion question="Lorem ipsum" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a mauris malesuada, egestas lacus at, facilisis dolor. Fusce ullamcorper hendrerit nunc vitae maximus. Quisque eros libero, commodo vitae velit sit amet, iaculis rutrum leo. Vivamus sollicitudin mi mi, vitae lobortis purus eleifend vitae."/>
          <FaqQuestion question="Lorem ipsum" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a mauris malesuada, egestas lacus at, facilisis dolor. Fusce ullamcorper hendrerit nunc vitae maximus. Quisque eros libero, commodo vitae velit sit amet, iaculis rutrum leo. Vivamus sollicitudin mi mi, vitae lobortis purus eleifend vitae."/>
        </Paper>
      </center>
      <TextAndButton text="Hai altre domande?" color="black" buttonText="Contattaci"/>
    </Grid>
  );
}