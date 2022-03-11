import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import { BrowserRouter, Routes } from "react-router-dom";
import { initPageBackground } from './theme/theme';
import Services from './pages/services/Services';
//import Projects from './pages/projects/Projects';
import ContactUs from './pages/contact-us/ContactUs';

export default function App() {
  initPageBackground();
  return (
    <BrowserRouter>
      <Layout>
        <Home></Home>
        <Services></Services>
        {/*<Projects></Projects>*/}
        <ContactUs></ContactUs>
        <Routes>

          {/*
          <Route path="/" element={<Home/>}/>
          <Route path="/prova" element={<></>}/>
          <Route path="/chi-siamo" element={<KnowUs />}/>*/}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
