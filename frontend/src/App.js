import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Website from './pages/Website/index'

import Admin from './pages/Admin/index'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Website.MarketingDigital />} />

        <Route path="/Orcamento/MarketingDigital" element={<Website.MarketingDigital />} />
        <Route path="/Orcamento/DesignGrafico" element={<Website.DesignGrafico />} />
        <Route path="/Orcamento/WebsiteLojaOnline" element={<Website.WebsiteLojaOnline />} />        
        <Route path="/Orcamento/Comunicacao" element={<Website.Comunicacao />} />

        <Route path="/Backoffice" element={<Admin.BackOffice />} />
        <Route path="/Backoffice/Packads" element={<Admin.PacksAds />} />
        <Route path="/Backoffice/PacksSocial" element={<Admin.PacksSocial />} />
        <Route path="/Backoffice/Pedidos" element={<Admin.Pedidos />} />
        <Route path="/Backoffice/Precosmarketing" element={<Admin.PrecosMarketing />} />
        <Route path="/Backoffice/Precoscomunicacao" element={<Admin.PrecosComunicacao />} />
        <Route path="/Backoffice/Precosdesign" element={<Admin.PrecosDesign />} />
        <Route path="/Backoffice/Precoswebsite" element={<Admin.PrecosWebsite />} />
        <Route path="/Backoffice/Utilizadores" element={<Admin.Utilizadores />} />
        <Route path="/Backoffice/AdicionarUtilizador" element={<Admin.Utilizadores />} />

      </Routes>
    </BrowserRouter>
  );
}