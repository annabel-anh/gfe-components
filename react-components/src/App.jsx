import { Routes, Route } from "react-router";
import "./App.css";
import BadgesPage from "./pages/BadgesPage/BadgesPage.jsx";
import ComponentPageLayout from "./layouts/ComponentPageLayout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComponentPageLayout />}>
        <Route path="badge" element={<BadgesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
