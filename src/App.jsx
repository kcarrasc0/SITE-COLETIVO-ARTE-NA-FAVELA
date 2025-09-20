import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Imports das páginas
import Home from "./pages/Home/Home";
import AtividadesPage from "./pages/Atividades/AtividadesPage";
import SobrePage from "./pages/Sobre/SobrePage";
import ComunicacaoPage from "./pages/Comunicacao/ComunicacaoPage";
import NoticiasPage from "./pages/Noticias/NoticiasPage";

import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atividades" element={<AtividadesPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/comunicacao" element={<ComunicacaoPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
