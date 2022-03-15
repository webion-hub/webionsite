import Layout from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initPageBackground } from './theme/theme';
import MainPage from './pages/main-page/MainPage';
import PrivacyAndLicences from './pages/main-page/PrivacyAndLicences';

export default function App() {
  initPageBackground();
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/privacy-licenze" element={<PrivacyAndLicences/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
