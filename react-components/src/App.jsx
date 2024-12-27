import { Routes, Route } from "react-router";
import "./App.css";
import BadgesPage from "./pages/BadgesPage/BadgesPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/badge" element={<BadgesPage />} />
    </Routes>
  );
}

export default App;
