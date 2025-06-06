import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Sobre from './Routers/Sobre';
import Tecnologia from './Routers/Tecnologia';
import Solucao from './Routers/Solucao';
import Login from './Routers/Login';
import Home from './Routers/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  );
}

export default App;
