import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../paginas/inicio.jsx";
import Solicitar from "../paginas/solicitar.jsx";
import Simular from "../paginas/simular.jsx";

export default function AppRouter() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/solicitar" element={<Solicitar />} />
        <Route path="/simular" element={<Simular />} />
      </Routes>
    </BrowserRouter>
  );
}
