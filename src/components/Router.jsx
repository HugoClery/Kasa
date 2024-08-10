import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import APropos from "../pages/APropos";
import Logement from "../pages/Logement";
import Error from "../pages/Error";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/logement/:logementId" element={<Logement />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
