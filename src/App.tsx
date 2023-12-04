import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Headers from "./pages/Headers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<h1>Home</h1>} />
        <Route path="headers" element={<Headers />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
