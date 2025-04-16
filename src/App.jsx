import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import AllIndiaPage from "./pages/AllIndiaPage";
import BankingPage from "./pages/BankingPage";
import TeachingPage from "./pages/TeachingPage";
import RailwaysPage from "./pages/RailwaysPage";
import EngineeringPage from "./pages/EngineeringPage";
import PolicePage from "./pages/PolicePage";
import DefencePage from "./pages/DefencePage";
import MedicalPage from "./pages/MedicalPage";
import OthersPage from "./pages/OthersPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryPage />} />
      <Route path="/all-india" element={<AllIndiaPage />} />
      <Route path="/banking" element={<BankingPage />} />
      <Route path="/teaching" element={<TeachingPage />} />
      <Route path="/railways" element={<RailwaysPage />} />
      <Route path="/engineering" element={<EngineeringPage />} />
      <Route path="/police" element={<PolicePage />} />
      <Route path="/defence" element={<DefencePage />} />
      <Route path="/medical" element={<MedicalPage />} />
      <Route path="/others" element={<OthersPage />} />
    </Routes>
  );
};

export default App;
