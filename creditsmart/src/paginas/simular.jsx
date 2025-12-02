import { useState } from "react";
import Navbar from "../componentes/navbar.jsx";
import CreditCard from "../componentes/CreditCard.jsx";
import { creditsData } from "../data/creditsData";
import "../assets/style.css";
import "./simular.css";

export default function Simular() {
  const [busqueda, setBusqueda] = useState("");
  const [rango, setRango] = useState("Todos");
  const [orden, setOrden] = useState("menor");

  // FILTRADO PRINCIPAL
  const filtrarCreditos = () => {
    let filtrados = creditsData;

    // 1️⃣ BÚSQUEDA EN TIEMPO REAL
    filtrados = filtrados.filter((c) =>
      c.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    // 2️⃣ FILTRO POR RANGO
    if (rango !== "Todos") {
      const [minR, maxR] = rango.split("-").map((n) => Number(n));
      filtrados = filtrados.filter(
        (c) => c.min >= minR && c.max <= maxR
      );
    }

    // 3️⃣ ORDENAR POR TASA
    filtrados = filtrados.sort((a, b) =>
      orden === "menor" ? a.tasa - b.tasa : b.tasa - a.tasa
    );

    return filtrados;
  };

  const resultados = filtrarCreditos();

  return (
    <>
      <Navbar />

      <main className="simulador">
        <h2>Simulador de Créditos</h2>

        {/* FILTROS */}
        <section className="filtros">
          
          {/* BÚSQUEDA */}
          <div className="campo">
            <label>Buscar por el nombre</label>
            <input
              type="text"
              placeholder="Ej: crédito educativo"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          {/* RANGO */}
          <div className="campo">
            <label>Rango de montos</label>
            <select value={rango} onChange={(e) => setRango(e.target.value)}>
              <option value="Todos">Todos</option>
              <option value="1000000-10000000">$1.000.000 - $10.000.000</option>
              <option value="10000000-30000000">$10.000.000 - $30.000.000</option>
              <option value="30000000-200000000">$30.000.000 - $200.000.000</option>
            </select>
          </div>

          {/* ORDEN */}
          <div className="campo">
            <label>Ordenar por tasa</label>
            <select value={orden} onChange={(e) => setOrden(e.target.value)}>
              <option value="menor">Menor a mayor</option>
              <option value="mayor">Mayor a menor</option>
            </select>
          </div>

        </section>

        {/* RESULTADOS */}
        <section className="catalogo">
          <h3>Resultados de la búsqueda</h3>

          <div className="container">
            {resultados.length > 0 ? (
              resultados.map((credito) => (
                <CreditCard
                  key={credito.id}
                  nombre={credito.nombre}
                  tasa={credito.tasa}
                  min={credito.min}
                  max={credito.max}
                  plazo={credito.plazo}
                  imagen={credito.imagen}
                />
              ))
            ) : (
              <p className="no-result">No hay créditos disponibles</p>
            )}
          </div>
        </section>
      </main>

      <footer>
        <p>2025 Creditsmart</p>
      </footer>
    </>
  );
}
