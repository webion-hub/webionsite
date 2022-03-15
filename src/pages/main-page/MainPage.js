import Home from "./sections/Home";
import OurServices from "./sections/OurServices";
import WhyChooseUs from "./sections/WhyChooseUs";
import Projects from "./sections/Projects";
import HowWeWork from "./sections/HowWeWork";
import ContactUs from "./sections/ContactUs";
import Sections from "../../components/Sections";

export default function MainPage() {
  return (
    <Sections>
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
    </Sections>
  )
}