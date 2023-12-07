import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import TemplatePage from "./templates/1/Template";
import Headers from "./pages/Headers";
import Footers from "./pages/Footers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="templates" element={<Templates />} />
        <Route path="templates/:id" element={<TemplatePage />} />
        <Route path="headers" element={<Headers />} />
        <Route path="footers" element={<Footers />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
