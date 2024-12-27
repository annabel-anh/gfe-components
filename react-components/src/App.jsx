import { Routes, Route } from "react-router";
import "./App.css";
import BadgesPage from "./components/badge/BadgesPage/BadgesPage.jsx";
import ComponentPageLayout from "./layouts/ComponentPageLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="components" element={<ComponentPageLayout />}>
        <Route path="badge" element={<BadgesPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
