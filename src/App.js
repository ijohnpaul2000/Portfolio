import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <BrowserRouter basename={window.location.pathname || ""}>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/projects" exact element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
