import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import About from "./pages/About";
import Monitoring from "./pages/PlantCare/Monitoring";
import Plantcare from "./pages/PlantCare/Plantcare";
import Plantdescription from "./pages/PlantCare/Plantdescription";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/monitor" element={<Monitoring />} />
        <Route path="/plantcare" element={<Plantcare />} />
        <Route path="/plantdescription" element={<Plantdescription />} />
      </Routes>
    </BrowserRouter>
  );
}
