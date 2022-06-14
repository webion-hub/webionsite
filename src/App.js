import Layout from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initPageBackground } from './theme/theme';
import MainPage from './pages/main-page/MainPage';
import PoliciesAndLicenses from './pages/policies-and-licenses/PoliciesAndLicenses';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en-EN.json";
import it from "./locales/it-IT.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      it: { translation: it }
    },
    lng: "it",

    interpolation: {
      escapeValue: false
    }
  });

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
