import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { CitasFormPage } from "./pages/CitasFormPage";
import { CitasPage } from "./pages/CitasPage";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          {/* redirect to tasks */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lista-citas" element={<CitasPage />} />
          <Route path="/citas/:id" element={<CitasFormPage />} />
          <Route path="/create-citas" element={<CitasFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
