import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KnowUs from './pages/KnowUs';
import Faq from './pages/Faq';
import { initPageBackground } from './theme/theme';
import Projects from './pages/Projects';

export default function App() {
  initPageBackground();
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chi-siamo" element={<KnowUs />}/>
          <Route path="/progetti" element={<Projects />}/>
          <Route path="/faq" element={<Faq />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
