import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KnowUs from './pages/KnowUs'
import { initPageBackground } from './theme/theme';

export default function App() {
  initPageBackground();
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/prova" element={<></>}/>
          <Route path="/chi-siamo" element={<KnowUs />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
