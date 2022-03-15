import Layout from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initPageBackground } from './theme/theme';
import MainPage from './pages/main-page/MainPage';
import PoliciesAndLicenses from './pages/policies-and-licenses/PoliciesAndLicenses';

export default function App() {
  initPageBackground();
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/policies-licenze" element={<PoliciesAndLicenses/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
