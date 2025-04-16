import { Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CoverPage />} />
      <Route path="/categories" element={<CategoryPage />} />
    </Routes>
  );
}

export default App;
