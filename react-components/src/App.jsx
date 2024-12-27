import { Routes, Route } from "react-router";
import "./App.css";
import BadgesPage from "./pages/BadgesPage/BadgesPage.jsx";
import ComponentPageLayout from "./layouts/ComponentPageLayout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="components" element={<ComponentPageLayout />}>
        <Route path="badge" element={<BadgesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
