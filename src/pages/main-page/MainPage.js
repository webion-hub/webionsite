import { Box } from "@mui/system";
import theme from "../../theme/theme";

import Home from "./sections/Home";
import OurServices from "./sections/OurServices";
import WhyChooseUs from "./sections/WhyChooseUs";
import Projects from "./sections/Projects";
import HowWeWork from "./sections/HowWeWork";
import ContactUs from "./sections/ContactUs";

export default function MainPage() {
  return (
    <Box
      sx={{
        "& > section::before": {
          display: 'block',
          content: "''",
          marginTop: -theme.mixins.toolbar.minHeight + "px",
          height: theme.mixins.toolbar.minHeight + "px",
          visibility: 'hidden',
        },
      }}
    >
      <section id="home">
        <Home/>
      </section>

      <section id="servizi">
        <OurServices/>
      </section>

      <section id="sceglierci">
        <WhyChooseUs/>
      </section>

      <section id="progetti">
        <Projects/>
      </section>

      <section id="come-lavoriamo">
        <HowWeWork/>
      </section>

      <section id="contattaci">
        <ContactUs/>
      </section>
    </Box>
  )
}