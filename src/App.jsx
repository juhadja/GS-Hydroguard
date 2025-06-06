import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Nav from './Components/Nav';
import Sobre from './Routers/Sobre';
import Tecnologia from './Routers/Tecnologia';
import Solucao from './Routers/Solucao';
import Login from './Routers/Login';
import Cadastro from "./Routers/Cadastrar";
import Home from './Routers/Home';
import Footer from './Components/Footer';
import Error from './Routers/Error';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  );
}

export default App;
