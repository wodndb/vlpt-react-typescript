import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Chapters from "./pages/Chapters";
import Chapter from "./pages/Chapter";
import Example from "./pages/Example";
import PartPage from "./pages/PartPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Chapters" element={<Chapters />} />
        <Route path="/Chapters/:chapterId" element={<Chapter />} />
        <Route path="/Chapters/:chapterId/Parts/:partId" element={<PartPage />} />
        <Route path="/Chapters/:chapterId/Parts/:partId/Examples/:exampleId" element={<Example />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
