import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Headers from "./pages/Headers";
import Footers from "./pages/Footers";
import TestimonialsPage from "./pages/Testimonials";

// Composant qui chargera le template dynamiquement
const TemplateLoader = () => {
  const { id } = useParams();
  const TemplateComponent = lazy(() =>
    import(`./templates/${id}/Template`).catch(() => ({
      default: () => <div>Template non trouvé</div>,
    }))
  );

  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <TemplateComponent />
    </Suspense>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="templates" element={<Templates />} />
        <Route path="templates/:id" element={<TemplateLoader />} />
        <Route path="headers" element={<Headers />} />
        <Route path="footers" element={<Footers />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
