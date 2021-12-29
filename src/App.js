import Layout from './components/Layout';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/prova" element={<h1>aaaa</h1>}/>
        </Routes>
      </Layout>
    </BrowserRouter>   
  );
}

export default App;
