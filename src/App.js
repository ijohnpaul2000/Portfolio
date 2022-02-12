import "./App.css";
import HomePage from "./pages/HomePage";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/home" exact element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
