import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ComponentPageLayout from "./layouts/ComponentPageLayout.jsx";
import BadgesPage from "./components/badge/BadgesPage/BadgesPage.jsx";
import BlogCardPage from "./components/blogcard/BlogCardPage/BlogCardPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<ComponentPageLayout />}>
        <Route path="badge" element={<BadgesPage />} />
        <Route path="blog-card" element={<BlogCardPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
