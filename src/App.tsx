import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Monitoring from "./pages/PlantCare/Monitoring";
import Pruning from "./pages/PlantCare/Pruning";
import Plantcare from "./pages/PlantCare/Plantcare";
import Inspection from "./pages/PlantCare/Inspection";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/monitor" element={<Monitoring />} />
        <Route path="/prune" element={<Pruning />} />
        <Route path="/plantcare" element={<Plantcare />} />
        <Route path="/inspect" element={<Inspection />} />
        <Route path="/error404" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
