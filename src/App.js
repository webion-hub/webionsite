import Layout from './components/Layout';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Programming } from './components/illustrations/illustrations';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/prova" element={<Programming/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
